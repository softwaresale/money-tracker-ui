import { computed, signal, WritableSignal } from "@angular/core";

type Entity = { guid: string };

type EntityCacheNode<T extends Entity> = {
    entity: T;
    stored: Date;
    lastAccessed?: Date;
}

type EntityCache<T extends { guid: string }> = {
    [key: string]: EntityCacheNode<T>;
};

export type DurationUnit = 'm' | 's' | 'ms';
export type DurationString = `${number}${DurationUnit}`;

type TTL = {
    amount: number;
    msFactor: number;
}

const parseTTL = (str: DurationString): TTL => {
    const regexMatch = str.match(/(\d+)(m|s|ms)/);
    if (!regexMatch) {
        throw new Error('expected duration string to match regexp');
    }
    const ttlDuration = regexMatch[1];
    const unit = regexMatch[2] as DurationUnit;

    return {
        amount: +ttlDuration,
        msFactor: computeMSFactor(unit),
    }
}

const computeMSFactor = (str: DurationUnit): number => {
    switch (str) {
        case "m":
            return 60 * 1000;
        case "s":
            return 1000;
        case "ms":
            return 1;
    }
}

const hasDied = (stored: Date, now: Date, ttl: TTL) => {
    const durationMS = now.getTime() - stored.getTime();

    const durationInTTLUnits = durationMS / ttl.msFactor;
    return durationInTTLUnits >= ttl.amount;
}

export class EntityStore<T extends { guid: string }> {
    private readonly cache: WritableSignal<EntityCache<T>> = signal({});
    private readonly cacheSize = computed(() => computeCacheSize(this.cache()));
    private readonly cacheAtCapacity = computed(() => this.cacheSize() >= this.capacity);
    private readonly ttl: TTL;
    
    constructor(
        private readonly capacity: number,
        private readonly loadFactor: number,
        timeToLiveStr: DurationString,
    ) {
        // TODO should probably provide some kind of assertion here

        this.ttl = parseTTL(timeToLiveStr);
    }

    public store(entity: T) {

        if (this.cacheAtCapacity()) {
            // remove least recently used elements from cache
            this.freeUpSpace();
        }

        this.cache.update(snapshot => ({
            ...snapshot,
            [entity.guid]: {
                entity,
                stored: new Date(Date.now()),
            },
        }));
    }

    public get(guid: string): T | undefined {
        const snapshot = this.cache();
        const node = snapshot[guid];
        if (!node) {
            return undefined;
        }
        
        if (hasDied(node.stored, new Date(Date.now()), this.ttl)) {
            this.evict(node.entity.guid);
            return undefined;
        }

        this.cache.update(snapshot => ({
            ...snapshot,
            [guid]: {
                ...snapshot[guid],
                lastAccessed: new Date(Date.now()),
            },
        }));

        return node.entity;
    }

    public evict(guid: string) {
        this.cache.update(snapshot => {
            const { [guid]: evicted, ...remaining } = snapshot;
            return remaining;
        });
    }

    private freeUpSpace() {
        this.cache.update(snapshot => {
            
            const desiredSize = this.capacity / this.loadFactor;

            // first, clear dead entries
            const withoutDeadEntries = this.clearDeadEntries(snapshot);

            // check if we are at a desirable size
            if (computeCacheSize(withoutDeadEntries) <= desiredSize) {
                return withoutDeadEntries;
            }

            // if we are still pressed, then clear LRU entries
            return this.clearLRUEntries(withoutDeadEntries);
        });
    }

    private clearLRUEntries(snapshot: EntityCache<T>): EntityCache<T> {
        const leastRecentlyUsedToMostRecentlyUsedGuids = Object.values(this.cache()).sort((left, right) => {
            // 1. Handle cases where one or both are 'undefined' (Never Accessed)
            if (left.lastAccessed === undefined && right.lastAccessed === undefined) return 0;
            if (left.lastAccessed === undefined) return -1; // Move 'a' to the front
            if (right.lastAccessed === undefined) return 1;  // Move 'b' to the front

            // 2. Both have valid dates. Sort by timestamp ascending (LRU -> MRU)
            return left.lastAccessed.getTime() - right.lastAccessed.getTime();
        })
        .map(node => node.entity.guid);

        // halve the cache
        const clearCount = this.capacity / this.loadFactor;

        const clearGuids = new Set(leastRecentlyUsedToMostRecentlyUsedGuids.slice(0, clearCount));

        const keptEntries = Object.entries(snapshot)
            .filter(([key, node]) => !clearGuids.has(key));

        return Object.fromEntries(keptEntries);
    }

    private clearDeadEntries(snapshot: EntityCache<T>): EntityCache<T> {
        const now = new Date(Date.now());

        const liveEntries = Object.entries(snapshot)
            .filter(([key, node]) => !hasDied(node.stored, now, this.ttl));
        
        return Object.fromEntries(liveEntries);
    }
}

const computeCacheSize = <T extends Entity>(entityCache: EntityCache<T>): number => Object.entries(entityCache).length;
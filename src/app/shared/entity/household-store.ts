import { Household, HouseholdService } from "@api-client";
import { inject, Injectable } from "@angular/core";
import { EntityStore } from "./base-entity-store";
import { Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HouseholdStore {
    private readonly cache = new EntityStore<Household>(5, 2, '15m');
    private readonly householdService = inject(HouseholdService);

    getHouseholdByGUID(guid: string): Observable<Household> {
        const cached = this.cache.get(guid);
        if (cached) {
            return of(cached);
        }

        return this.householdService.getHouseholdByGUID(guid)
            .pipe(
                tap({
                    next: value => {
                        this.cache.store(value);
                    }
                })
            );
    }
}
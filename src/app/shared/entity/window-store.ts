import { ExpenseWindow, WindowService } from "@api-client";
import { inject, Injectable } from "@angular/core";
import { EntityStore } from "./base-entity-store";
import { Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExpenseWindowStore {

    private readonly windowService = inject(WindowService);
    private readonly cache = new EntityStore<ExpenseWindow>(10, 4, '1m');

    getExpenseWindow(guid: string): Observable<ExpenseWindow> {
        const cached = this.cache.get(guid);
        if (cached) {
            return of(cached);
        }

        return this.windowService.getWindowByGuid(guid)
            .pipe(
                tap({
                    next: window => {
                        this.cache.store(window);
                    }
                })
            );
    }

    stashWindow(window: ExpenseWindow) {
        this.cache.store(window);
    }
}
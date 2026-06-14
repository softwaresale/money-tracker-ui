import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Household } from '@api-client';
import { HouseholdStore } from '../../shared/entity/household-store';
import { ExpenseWindowStore } from '../../shared/entity/window-store';
import { tap } from 'rxjs';

export const householdMetadataResolver: ResolveFn<Household> = (route, state) => {
  const householdId = route.paramMap.get('householdId');
  if (!householdId) {
    throw new Error('expected householdId to be present in route');
  }

  const householdStore = inject(HouseholdStore);
  const windowStore = inject(ExpenseWindowStore);

  return householdStore.getHouseholdByGUID(householdId).pipe(
    tap({
      next: household => {
        windowStore.stashWindow(household.currentWindow);
      }
    }),
  );
};

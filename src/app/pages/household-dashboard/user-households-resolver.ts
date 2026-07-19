import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HouseholdMetadata, HouseholdService } from '@api-client';

export const userHouseholdsResolver: ResolveFn<HouseholdMetadata[]> = (route, state) => {
  const householdService = inject(HouseholdService);

  return householdService.getHouseholdsForUser();
};

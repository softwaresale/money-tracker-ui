import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HouseholdMetadata, HouseholdService } from '@api-client';

export const householdMetadataResolver: ResolveFn<HouseholdMetadata> = (route, state) => {
  const householdId = route.paramMap.get('householdId');
  if (!householdId) {
    throw new Error('expected householdId to be present in route');
  }

  const householdService = inject(HouseholdService);
  return householdService.getHouseholdByGUID(householdId);
};

import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { HouseholdMetadata, HouseholdService } from '@api-client';
import { PreferencesService } from '../../prefs/preferences';

export const userHouseholdsResolver: ResolveFn<HouseholdMetadata[]> = (route, state) => {

  
  const preferencesService = inject(PreferencesService);
  const defaultHouseholdGuid = preferencesService.getItem<string>('moneytracker:preferences:defaultHousehold');
  if (defaultHouseholdGuid) {
    const router = inject(Router);
    const redirect = router.parseUrl(`/households/${defaultHouseholdGuid}`);
    return new RedirectCommand(redirect);
  }

  const householdService = inject(HouseholdService);

  return householdService.getHouseholdsForUser();
};

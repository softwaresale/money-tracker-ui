import { Component, inject, input } from '@angular/core';
import { HouseholdMetadata } from '@api-client';
import { BasePage } from "../../base-page/base-page";
import { CenteredContentContainer, CenteredContent } from "../../shared/centered-content/centered-content";
import { HlmItemImports } from '@spartan-ng/helm/item';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRightCircle } from '@ng-icons/lucide';
import { HlmIcon } from "@spartan-ng/helm/icon";
import { HlmH2 } from "@spartan-ng/helm/typography";
import { PreferencesService } from '../../prefs/preferences';

@Component({
  selector: 'app-household-dashboard',
  imports: [BasePage, CenteredContentContainer, CenteredContent, HlmItemImports, RouterLink, HlmIcon, NgIcon, HlmH2],
  templateUrl: './household-dashboard.html',
  styleUrl: './household-dashboard.css',
  providers: [
    provideIcons({
      chevronRight: lucideChevronRightCircle
    })
  ]
})
export class HouseholdDashboard {

  private readonly preferencesService = inject(PreferencesService);

  readonly userHouseholds = input.required<HouseholdMetadata[]>();

  storeRecentlyVisitedHousehold(id: string) {
    this.preferencesService.storeItem('moneytracker:preferences:defaultHousehold', id);
  }
}

import { Component, computed, input } from '@angular/core';
import { CenteredContentContainer, CenteredContent } from "../../shared/centered-content/centered-content";
import { BasePage } from "../../base-page/base-page";
import { RouterOutlet } from '@angular/router';
import { Household } from '@api-client';
import { HlmH2 } from "@spartan-ng/helm/typography";
import { HlmButton } from "@spartan-ng/helm/button";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSettings } from '@ng-icons/lucide';
import { HlmIcon } from "@spartan-ng/helm/icon";

@Component({
  selector: 'app-household-page',
  imports: [CenteredContentContainer, CenteredContent, BasePage, RouterOutlet, HlmH2, HlmButton, HlmIcon, NgIcon],
  templateUrl: './household-page.html',
  styleUrl: './household-page.css',
  providers: [
    provideIcons({
      settings: lucideSettings,
    })
  ]
})
export class HouseholdPage {
  readonly householdId = input.required<string>();
  readonly household = input.required<Household>();

  protected readonly householdName = computed(() => this.household().name);
}

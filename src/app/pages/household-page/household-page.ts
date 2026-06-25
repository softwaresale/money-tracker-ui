import { Component, computed, Directive, inject, input } from '@angular/core';
import { CenteredContentContainer, CenteredContent } from "../../shared/centered-content/centered-content";
import { BasePage } from "../../base-page/base-page";
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Household } from '@api-client';
import { HlmH2, HlmLead } from "@spartan-ng/helm/typography";
import { HlmButton } from "@spartan-ng/helm/button";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRightCircle, lucideMoreVertical, lucideSettings } from '@ng-icons/lucide';
import { HlmIcon } from "@spartan-ng/helm/icon";
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmItem, HlmItemImports } from "@spartan-ng/helm/item";
import { DatePipe } from '@angular/common';

@Directive({
  selector: 'div[appNavGroupContainer]',
  host: {
    class: 'flex flex-col gap-2 px-2'
  }
})
export class NavGroupContainer {}

@Component({
  selector: 'app-household-page',
  imports: [CenteredContentContainer, CenteredContent, BasePage, RouterOutlet, HlmH2, HlmButton, HlmIcon, NgIcon, HlmSheetImports, HlmItemImports, RouterLinkWithHref, HlmLead, NavGroupContainer, DatePipe],
  templateUrl: './household-page.html',
  styleUrl: './household-page.css',
  providers: [
    provideIcons({
      settings: lucideSettings,
      more: lucideMoreVertical,
      goto: lucideChevronRightCircle,
    })
  ]
})
export class HouseholdPage {
  readonly householdId = input.required<string>();
  readonly household = input.required<Household>();

  protected readonly householdName = computed(() => this.household().name);
  protected readonly recentWindows = computed(() => this.household().recentWindows ?? []);

  protected readonly householdViewRoute = computed(() => ([ '/households', this.householdId() ]));
}

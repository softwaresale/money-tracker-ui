import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { CenteredContentContainer, CenteredContent } from "../../shared/centered-content/centered-content";
import { BasePage } from "../../base-page/base-page";
import { RouterOutlet } from '@angular/router';
import { HouseholdMetadata, HouseholdPageService, HouseholdPageView } from '@api-client';

@Component({
  selector: 'app-household-page',
  imports: [CenteredContentContainer, CenteredContent, BasePage, RouterOutlet],
  templateUrl: './household-page.html',
  styleUrl: './household-page.css',
})
export class HouseholdPage {
  readonly householdId = input.required<string>();
  readonly householdMetadata = input.required<HouseholdMetadata>();

  protected readonly householdName = computed(() => this.householdMetadata().name);
}

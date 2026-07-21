import { Component, computed, input } from '@angular/core';
import { ExpenseCategoryMetadata, WindowSettleUserCategoryContribution } from '@api-client';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { CategoryChip } from "../../../../../shared/category-chip/category-chip";
import { DollarAmountPipe } from "../../../../../shared/dollar-amount-pipe";

@Component({
  selector: 'app-user-contribution-card',
  imports: [HlmCardImports, CategoryChip, DollarAmountPipe],
  templateUrl: './user-contribution-card.html',
  styleUrl: './user-contribution-card.css',
})
export class UserContributionCard {

  readonly userContribution = input.required<WindowSettleUserCategoryContribution>();

  readonly category = computed(() => this.userContribution().category);
}

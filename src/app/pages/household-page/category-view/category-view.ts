import { Component, computed, input } from '@angular/core';
import { ExpenseCategory } from '@api-client';
import { HlmLead, HlmH3 } from '@spartan-ng/helm/typography';
import { HlmSliderImports } from '@spartan-ng/helm/slider';
import { Percentages } from "./percentages/percentages";

@Component({
  selector: 'app-category-view',
  imports: [HlmH3, HlmLead, HlmSliderImports, Percentages],
  templateUrl: './category-view.html',
  styleUrl: './category-view.css',
})
export class CategoryView {

  readonly category = input.required<ExpenseCategory>();

  readonly percentages = computed(() => this.category().percentages);

  // readonly percentagesInvalid = computed(() => this.userValues().reduce((sum, rec) => sum + rec.amount, 0) !== 100);

  reset() {
  }
}

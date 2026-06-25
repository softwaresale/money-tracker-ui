import { Component, input } from '@angular/core';
import { ExpenseCategory } from '@api-client';
import { HlmLead, HlmH3 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'app-category-view',
  imports: [HlmH3],
  templateUrl: './category-view.html',
  styleUrl: './category-view.css',
})
export class CategoryView {

  readonly category = input.required<ExpenseCategory>();
}

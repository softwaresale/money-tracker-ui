import { Component, input } from '@angular/core';
import { WindowSummaryCategoryTotal } from '@api-client';
import { CategoryChip } from "../../category-chip/category-chip";
import { DollarAmountPipe } from "../../dollar-amount-pipe";

@Component({
  selector: 'app-category-total-table',
  imports: [CategoryChip, DollarAmountPipe],
  templateUrl: './category-total-table.html',
  styleUrl: './category-total-table.css',
})
export class CategoryTotalTable {

  readonly categoryTotals = input.required<WindowSummaryCategoryTotal[]>();
}

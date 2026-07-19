import { Component, input } from '@angular/core';
import { WindowSummary } from '@api-client';
import { DollarAmountPipe } from "../dollar-amount-pipe";
import { HlmH3, HlmMuted, HlmLarge, HlmH4 } from "@spartan-ng/helm/typography";
import { SummaryCard } from "./summary-card/summary-card";
import { LargeFigure } from "./large-figure/large-figure";
import { CategoryChip } from "../category-chip/category-chip";
import { CategoryTotalTable } from "./category-total-table/category-total-table";

@Component({
  selector: 'app-window-summary-view',
  imports: [DollarAmountPipe, HlmH3, HlmMuted, SummaryCard, LargeFigure, CategoryChip, HlmLarge, HlmH4, CategoryTotalTable],
  templateUrl: './window-summary-view.html',
  styleUrl: './window-summary-view.css',
})
export class WindowSummaryView {

  readonly summary = input.required<WindowSummary>();
}

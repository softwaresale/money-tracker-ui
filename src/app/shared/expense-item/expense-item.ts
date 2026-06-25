import { Component, computed, input } from '@angular/core';
import { FixedExpense, FixedExpenseInstance, VariableExpense } from '@api-client';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { DollarAmountPipe } from '../dollar-amount-pipe';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { CategoryChip } from "../category-chip/category-chip";

@Component({
  selector: 'app-expense-item',
  imports: [HlmItemImports, DollarAmountPipe, HlmBadgeImports, CategoryChip],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {

  readonly expense = input.required<VariableExpense | FixedExpenseInstance>();

  readonly description = computed(() => this.expense().category?.name ?? 'No Category');
}

import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FixedExpense, VariableExpense } from '@api-client';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { DollarAmountPipe } from '../dollar-amount-pipe';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
  selector: 'app-expense-item',
  imports: [HlmItemImports, DollarAmountPipe, HlmBadgeImports],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {

  readonly expense = input.required<VariableExpense | FixedExpense>();

  readonly description = computed(() => this.expense().category?.description ?? 'No Category');
}

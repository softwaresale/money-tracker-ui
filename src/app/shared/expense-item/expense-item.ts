import { Component, computed, input, output } from '@angular/core';
import { FixedExpenseInstance, VariableExpense } from '@api-client';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { DollarAmountPipe } from '../dollar-amount-pipe';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { CategoryChip } from "../category-chip/category-chip";
import { HlmIcon } from "@spartan-ng/helm/icon";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoreVertical } from '@ng-icons/lucide';
import { HlmButton } from "@spartan-ng/helm/button";
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

@Component({
  selector: 'app-expense-item',
  imports: [HlmItemImports, DollarAmountPipe, HlmBadgeImports, CategoryChip, HlmIcon, NgIcon, HlmButton, HlmDropdownMenuImports],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
  providers: [
    provideIcons({
      menu: lucideMoreVertical,
    })
  ],
})
export class ExpenseItem {

  readonly expense = input.required<VariableExpense | FixedExpenseInstance>();
  readonly showActions = input(true);

  readonly deleteRequested = output();

  readonly description = computed(() => this.expense().category?.name ?? 'No Category');

  requestItemDeletion() {
    this.deleteRequested.emit();
  }
}

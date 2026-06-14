import { Component, input } from '@angular/core';
import { ExpenseItem } from '../../../../shared/expense-item/expense-item';
import { FixedExpense, VariableExpense } from '@api-client';
import { HlmLead } from '@spartan-ng/helm/typography';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseItem, HlmLead],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {

  readonly title = input.required<string>();
  readonly expenses = input.required<(VariableExpense | FixedExpense)[]>();
}

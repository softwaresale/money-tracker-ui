import { Component, computed, input, signal } from '@angular/core';
import { ExpenseWindow } from '@api-client';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmTypographyImports } from "@spartan-ng/helm/typography";
import { ExpenseList } from "./expense-list/expense-list";
import { DatePipe } from '@angular/common';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';

@Component({
  selector: 'app-window-view',
  imports: [HlmButton, HlmTypographyImports, ExpenseList, DatePipe, HlmTabsImports],
  templateUrl: './window-view.html',
  styleUrl: './window-view.css',
})
export class WindowView {

  readonly expenseWindow = input.required<ExpenseWindow>();
  
  protected readonly windowId = computed(() => this.expenseWindow().guid);
}

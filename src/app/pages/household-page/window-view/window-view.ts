import { Component, computed, input, signal } from '@angular/core';
import { ExpenseWindow } from '@api-client';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmTypographyImports } from "@spartan-ng/helm/typography";
import { ExpenseList } from "./expense-list/expense-list";
import { DatePipe } from '@angular/common';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { RouterLink } from "@angular/router";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleDollarSign, lucideEye, lucidePen, lucidePlusCircle } from '@ng-icons/lucide';
import { HlmIcon } from "@spartan-ng/helm/icon";
import { ActionBox, ActionBoxAction } from "../../../shared/action-box/action-box";
import { SummarySubpage } from "./summary-subpage/summary-subpage";

@Component({
  selector: 'app-window-view',
  imports: [HlmButton, HlmTypographyImports, ExpenseList, DatePipe, HlmTabsImports, RouterLink, HlmIcon, NgIcon, ActionBox, ActionBoxAction, SummarySubpage],
  templateUrl: './window-view.html',
  styleUrl: './window-view.css',
  providers: [
    provideIcons({
      add: lucidePlusCircle,
      settle: lucideCircleDollarSign,
      edit: lucidePen,
      view: lucideEye,
    })
  ]
})
export class WindowView {

  readonly expenseWindow = input.required<ExpenseWindow>();
  
  protected readonly windowId = computed(() => this.expenseWindow().guid);

  protected readonly paid = computed(() => !!(this.expenseWindow().paidDate));
}

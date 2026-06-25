import { Component, input, signal } from '@angular/core';

import { SubpageContainer } from "../../../shared/subpage/subpage-container";
import { HlmLead } from "@spartan-ng/helm/typography";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { RouterLink } from '@angular/router';
import { FixedExpense } from '@api-client';
import { DollarAmountPipe } from '../../../shared/dollar-amount-pipe';
import { lucideBadgeDollarSign, lucideChevronRightCircle, lucideCirclePlus } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { ActionBox } from "../../../shared/action-box/action-box";
import { CategoryChip } from "../../../shared/category-chip/category-chip";

@Component({
  selector: 'app-fixed-expense-subpage',
  imports: [
    SubpageContainer,
    HlmLead,
    NgIcon,
    HlmIcon,
    HlmEmptyImports,
    HlmItemImports,
    RouterLink,
    DollarAmountPipe,
    HlmButton,
    ActionBox,
    CategoryChip
],
  templateUrl: './fixed-expense-subpage.html',
  styleUrl: './fixed-expense-subpage.css',
  providers: [
    provideIcons({
      add: lucideCirclePlus,
      fixedExpense: lucideBadgeDollarSign,
      goto: lucideChevronRightCircle,
    })
  ]
})
export class FixedExpenseSubpage {

  readonly fixedExpenses = input.required<FixedExpense[]>();
}

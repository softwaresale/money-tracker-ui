import { Component, signal } from '@angular/core';
import { BasePage } from "../base-page/base-page";
import { HlmButtonImports } from "@spartan-ng/helm/button";
import { HlmTypographyImports } from "@spartan-ng/helm/typography";
import { CenteredContentContainer, CenteredContent } from "../shared/centered-content/centered-content";
import { ExpenseItem } from "./expense-item/expense-item";
import { HlmItemGroup } from "@spartan-ng/helm/item";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-household-expenses-page',
  imports: [BasePage, HlmButtonImports, HlmTypographyImports, CenteredContentContainer, CenteredContent, ExpenseItem, HlmItemGroup, RouterLink],
  templateUrl: './household-expenses-page.html',
  styleUrl: './household-expenses-page.css',
})
export class HouseholdExpensesPage {


  readonly expenses = signal([1, 2, 3, 4]);
}

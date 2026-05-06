import { Component } from '@angular/core';
import { CenteredContentContainer, CenteredContent } from "../../shared/centered-content/centered-content";
import { BasePage } from "../../base-page/base-page";
import { ExpenseForm } from "../expense-form/expense-form";
import { HlmTypographyImports } from '@spartan-ng/helm/typography';
import { HlmButton } from "@spartan-ng/helm/button";

@Component({
  selector: 'app-add-expense-page',
  imports: [CenteredContentContainer, CenteredContent, BasePage, ExpenseForm, HlmTypographyImports, HlmButton],
  templateUrl: './add-expense-page.html',
  styleUrl: './add-expense-page.css',
})
export class AddExpensePage {

}

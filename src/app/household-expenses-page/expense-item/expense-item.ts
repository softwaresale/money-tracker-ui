import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { HlmItemImports } from '@spartan-ng/helm/item';
import { HlmBadgeImports } from "@spartan-ng/helm/badge";

@Component({
  selector: 'app-expense-item',
  imports: [HlmItemImports, CurrencyPipe, HlmBadgeImports],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {

}

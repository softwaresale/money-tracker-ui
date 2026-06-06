import { Component, computed, input } from '@angular/core';
import { ExpenseWindow } from '@api-client';

@Component({
  selector: 'app-window-view',
  imports: [],
  templateUrl: './window-view.html',
  styleUrl: './window-view.css',
})
export class WindowView {

  readonly expenseWindow = input.required<ExpenseWindow>();
  
  protected readonly windowId = computed(() => this.expenseWindow().guid);
}

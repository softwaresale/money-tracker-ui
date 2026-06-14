import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ExpenseWindow } from '@api-client';
import { ExpenseWindowStore } from '../../../shared/entity/window-store';

export const windowResolver: ResolveFn<ExpenseWindow> = (route, state) => {

  const windowId = route.paramMap.get('windowId');
  if (!windowId) {
    throw new Error('expected window id in path');
  }

  const windowStore = inject(ExpenseWindowStore);
  return windowStore.getExpenseWindow(windowId);
};

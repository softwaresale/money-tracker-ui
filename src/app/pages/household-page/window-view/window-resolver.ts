import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ExpenseWindow, WindowService } from '@api-client';

export const windowResolver: ResolveFn<ExpenseWindow> = (route, state) => {
  
  const windowId = route.paramMap.get('windowId');
  if (!windowId) {
    throw new Error('expected window id in path');
  }

  const windowService = inject(WindowService);
  return windowService.getWindowByGuid(windowId);
};

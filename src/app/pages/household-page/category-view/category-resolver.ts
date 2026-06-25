import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ExpenseCategory, ExpenseCategoryService } from '@api-client';

export const categoryResolver: ResolveFn<ExpenseCategory> = (route, state) => {
  const categoryId = route.paramMap.get('categoryId');
  if (!categoryId) {
    throw new Error('categoryId not found in route');
  }

  const categoryService = inject(ExpenseCategoryService);

  return categoryService.getExpenseCategoryById(categoryId);
};

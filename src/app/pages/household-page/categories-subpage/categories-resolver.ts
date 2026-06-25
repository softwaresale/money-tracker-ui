import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ExpenseCategory, ExpenseCategoryService } from '@api-client';

export const categoriesResolver: ResolveFn<ExpenseCategory[]> = (route, state) => {
  const householdGuid = route.paramMap.get('householdId');
  if (!householdGuid) {
    throw new Error('householdId not in route');
  }

  const expenseCategoryService = inject(ExpenseCategoryService);
  return expenseCategoryService.getExpenseCategoriesForHousehold(householdGuid);
};

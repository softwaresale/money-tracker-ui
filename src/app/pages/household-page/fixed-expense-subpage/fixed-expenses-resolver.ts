import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FixedExpense, FixedExpenseService } from '@api-client';

export const fixedExpensesResolver: ResolveFn<FixedExpense[]> = (route, state) => {
  const householdId = route.paramMap.get('householdId');
  if (!householdId) {
    throw new Error('Household ID is required');
  }

  const fixedExpenseService = inject(FixedExpenseService);

  return fixedExpenseService.getFixedExpensesForHousehold(householdId);
};

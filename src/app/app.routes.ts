import { Routes } from '@angular/router';
import { HouseholdExpensesPage } from './household-expenses-page/household-expenses-page';
import { AddExpensePage } from './household-expenses-page/add-expense-page/add-expense-page';

export const routes: Routes = [
    {
        path: 'households',
        children: [
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: HouseholdExpensesPage,
                    },
                    {
                        path: 'expenses',
                        component: AddExpensePage,
                    }
                ]
            }
        ]
    }
];

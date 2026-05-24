import { Routes } from '@angular/router';
import { HouseholdExpensesPage } from './household-expenses-page/household-expenses-page';
import { AddExpensePage } from './household-expenses-page/add-expense-page/add-expense-page';
import { authGuard } from '@edgeflare/ngx-oidc';

export const routes: Routes = [
    {
        path: 'households',
        canActivate: [authGuard],
        canActivateChild: [authGuard],
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

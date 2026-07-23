import { Routes } from '@angular/router';
import { authGuard } from '@edgeflare/ngx-oidc';
import { HouseholdPage } from './pages/household-page/household-page';
import { WindowView } from './pages/household-page/window-view/window-view';
import { householdMetadataResolver } from './pages/household-page/household-metadata-resolver';
import { windowResolver } from './pages/household-page/window-view/window-resolver';
import { VariableExpenseFormSubpage } from "./pages/household-page/window-view/variable-expense-form-subpage/variable-expense-form-subpage";
import { CategoriesSubpage } from './pages/household-page/categories-subpage/categories-subpage';
import { categoriesResolver } from './pages/household-page/categories-subpage/categories-resolver';
import { CreateCategorySubpage } from './pages/household-page/categories-subpage/create-category-subpage/create-category-subpage';
import { CategoryView } from './pages/household-page/category-view/category-view';
import { categoryResolver } from './pages/household-page/category-view/category-resolver';
import { FixedExpenseSubpage } from './pages/household-page/fixed-expense-subpage/fixed-expense-subpage';
import { FixedExpenseCreate } from './pages/household-page/fixed-expense-subpage/fixed-expense-create/fixed-expense-create';
import { fixedExpensesResolver } from './pages/household-page/fixed-expense-subpage/fixed-expenses-resolver';
import { HouseholdDashboard } from './pages/household-dashboard/household-dashboard';
import { userHouseholdsResolver } from './pages/household-dashboard/user-households-resolver';
import { SettleView } from './pages/household-page/window-view/settle-view/settle-view';
import { settlementDataResolver } from './pages/household-page/window-view/settle-view/settlement-data-resolver';

export const routes: Routes = [
    {
        path: 'households',
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HouseholdDashboard,
                resolve: {
                    userHouseholds: userHouseholdsResolver,
                }
            },
            {
                path: ':householdId',
                component: HouseholdPage,
                resolve: {
                    household: householdMetadataResolver,
                },
                children: [
                    {
                        path: 'window',
                        children: [
                            {
                                path: ':windowId',
                                component: WindowView,
                                resolve: {
                                    expenseWindow: windowResolver,
                                },
                                runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
                            },
                            {
                                path: ':windowId/expense-form',
                                component: VariableExpenseFormSubpage,
                            },
                            {
                                path: ':windowId/settle',
                                component: SettleView,
                                resolve: {
                                    settleData: settlementDataResolver,
                                }
                            }
                        ]
                    },
                    {
                        path: 'categories',
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                component: CategoriesSubpage,
                                resolve: {
                                    categories: categoriesResolver,
                                }
                            },
                            {
                                path: 'create',
                                component: CreateCategorySubpage,
                            },
                            {
                                path: ':categoryId',
                                component: CategoryView,
                                resolve: {
                                    category: categoryResolver,
                                }
                            }
                        ]
                    },
                    {
                        path: 'fixed-expenses',
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                component: FixedExpenseSubpage,
                                resolve: {
                                    fixedExpenses: fixedExpensesResolver,
                                }
                            },
                            {
                                path: 'create',
                                component: FixedExpenseCreate,
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'households'
    }
];

import { Routes } from '@angular/router';
import { authGuard } from '@edgeflare/ngx-oidc';
import { HouseholdPage } from './pages/household-page/household-page';
import { WindowView } from './pages/household-page/window-view/window-view';
import { householdMetadataResolver } from './pages/household-page/household-metadata-resolver';
import { windowResolver } from './pages/household-page/window-view/window-resolver';

export const routes: Routes = [
    {
        path: 'households',
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: ':householdId',
                component: HouseholdPage,
                resolve: {
                    householdMetadata: householdMetadataResolver,
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
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

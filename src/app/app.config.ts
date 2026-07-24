import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { UserManagerSettings } from 'oidc-client-ts';
import { initOidc, OIDC_ROUTES, authzTokenInterceptor } from '@edgeflare/ngx-oidc';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideDefaultClient } from '@api-client';

const oidcConfig: UserManagerSettings = {
  authority: 'https://salefamily-hdmlgu.us1.zitadel.cloud/',
  client_id: '374377270212596762',
  redirect_uri: `${window.location.origin}/signin/callback`,
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: window.location.origin,
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    // oidc config
    initOidc(oidcConfig),
    provideRouter(OIDC_ROUTES),

    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding()
    ),

    provideHttpClient(withFetch(), withInterceptors([authzTokenInterceptor])),

    provideDefaultClient({
      basePath: '',
    }),
  ]
};

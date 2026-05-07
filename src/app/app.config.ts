import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { AppInitConfig, ConfigService } from '@configs';
import { catchingErrorInterceptor, interceptor } from '@interceptors';
import { firstValueFrom, tap } from 'rxjs';
import { routes } from './app.route';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      const http = inject(HttpClient),
        cg = inject(ConfigService);

      return firstValueFrom(
        http.get<AppInitConfig>('/config.json').pipe(
          tap(config => {
            cg.setConfig(config);
          })
        )
      );
    }),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(), withInterceptors([interceptor(), catchingErrorInterceptor()])),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideClientHydration(withEventReplay())
  ]
};

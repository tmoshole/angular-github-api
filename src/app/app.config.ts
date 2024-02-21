import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

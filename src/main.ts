import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RegistrationFormModule } from './app/registrationForm.module';
import { environment } from '@registration-form-env';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RegistrationFormModule)
  .catch(err => console.error(err));

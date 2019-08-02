import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationFormRoutingModule } from './registrationFormRouting.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './containers/app-root/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RegistrationFormRoutingModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class RegistrationFormModule { }

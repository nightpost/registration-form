import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './modules/auth/containers/registrationForm/registrationForm.component';

const routes: Routes = [
  { path: '', component: RegistrationFormComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegistrationFormRoutingModule {}

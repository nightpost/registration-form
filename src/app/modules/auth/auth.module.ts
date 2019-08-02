import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './containers/registrationForm/registrationForm.component';
import { AsCommonModule } from '../common/common.module';

@NgModule({
  declarations: [RegistrationFormComponent],
  exports: [RegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsCommonModule
  ]
})
export class AuthModule {}

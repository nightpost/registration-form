import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AsCommonModule } from '../common/common.module';
import { RegistrationFormComponent } from './containers/registrationForm/registrationForm.component';
import { AcceptCriteriaComponent } from './components/acceptCriteria/acceptCriteria.component';

@NgModule({
  declarations: [RegistrationFormComponent, AcceptCriteriaComponent],
  exports: [RegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsCommonModule
  ]
})
export class AuthModule {}

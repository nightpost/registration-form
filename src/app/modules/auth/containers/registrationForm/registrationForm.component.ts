import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputType } from '../../models';
import { EmailValidator, PasswordValidator } from '../../../../validators';

@Component({
  selector: 'as-registration-form',
  styleUrls: ['./registrationForm.component.scss'],
  templateUrl: './registrationForm.component.html'
})
export class RegistrationFormComponent implements OnInit {
  readonly emailInputType: InputType = InputType.Email;
  readonly passwordInputType: InputType = InputType.Password;

  readonly emailTitle: string = 'Email';
  readonly passwordTitle: string = 'Password';
  readonly submitButtonTitle: string = 'Submit';

  readonly emailInputField: string = 'email';
  readonly passwordInputField: string = 'password';

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      [this.emailInputField]: new FormControl('', EmailValidator.emailValidator()),
      [this.passwordInputField]: new FormControl('', PasswordValidator.passwordValidator())
    });
  }

  onSubmit(): void {
    console.log('Submit form', this.form);
  }
}

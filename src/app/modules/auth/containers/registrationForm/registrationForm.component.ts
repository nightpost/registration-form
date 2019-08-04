import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidationErrors } from '@angular/forms';
import { EmailValidator, PasswordValidator } from '../../../../validators';
import { IFieldCriteria, InputType } from '../../models';
import { PasswordErrorType, EmailErrorType } from '../../../../models';

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
  private readonly firstIndex = 0;

  form: FormGroup;
  emailCriteria: IFieldCriteria[] = [
    { mapping: EmailErrorType.Required, description: 'Email is required*' },
    { mapping: EmailErrorType.Pattern, description: 'Include "@" sign and at least 2 letters of domain*' }
  ];
  passwordCriteria: IFieldCriteria[] = [
    { mapping: PasswordErrorType.MinLength, description: '8+ characters' },
    { mapping: PasswordErrorType.MinLowercaseLength, description: 'lowercase letter' },
    { mapping: PasswordErrorType.MinUppercaseLength, description: 'uppercase letter' },
    { mapping: PasswordErrorType.MinNumberLength, description: 'number' },
    { mapping: PasswordErrorType.MinSpecialCharacterLength, description: 'special character' },
  ];

  get emailInputControl(): FormControl {
    return this.form.get(this.emailInputField) as FormControl;
  }

  get passwordInputControl(): FormControl {
    return this.form.get(this.passwordInputField) as FormControl;
  }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      [this.emailInputField]: new FormControl('', EmailValidator.emailValidator()),
      [this.passwordInputField]: new FormControl('', PasswordValidator.passwordValidator())
    });
  }

  getFirstError(errors: ValidationErrors, inputField: string): string {
    const error = Object.keys(errors)[this.firstIndex];
    if (inputField === this.passwordInputField) {
      const selectedCriterion = this.passwordCriteria.find((criterion: IFieldCriteria) => criterion.mapping === error);
      return `Please check "${selectedCriterion.description}" rule*`;
    } else if (inputField === this.emailInputField) {
      const selectedCriterion = this.emailCriteria.find((criterion: IFieldCriteria) => criterion.mapping === error);
      return selectedCriterion.description;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      form.resetForm({});
    }
    console.log(this.form);
  }
}

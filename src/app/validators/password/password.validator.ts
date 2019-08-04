import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PasswordErrorType } from '../../models';

export class PasswordValidator {
  private static readonly minLengthRegExp = /^.{8,}$/;
  private static readonly upperCaseRegExp = /[A-Z]/;
  private static readonly lowerCaseRegExp = /[a-z]/;
  private static readonly numberRegExp = /[0-9]/;
  private static readonly specialCharacterRegExp = /[!@#\$%\^\&*\)\(+=._\{\}\[\]\-]/;

  private static handleErrorCase(validationErrors: PasswordErrorType[]): ValidationErrors {
    const errorObject = {};
    validationErrors.forEach((error: PasswordErrorType) => errorObject[error] = true);
    return errorObject;
  }

  static passwordValidator(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      const validationErrors = [];
      const testValue = control.value;

      if (!PasswordValidator.minLengthRegExp.test(testValue)) {
        validationErrors.push(PasswordErrorType.MinLength);
      }
      if (!PasswordValidator.upperCaseRegExp.test(testValue)) {
        validationErrors.push(PasswordErrorType.MinUppercaseLength);
      }
      if (!PasswordValidator.lowerCaseRegExp.test(testValue)) {
        validationErrors.push(PasswordErrorType.MinLowercaseLength);
      }
      if (!PasswordValidator.numberRegExp.test(testValue)) {
        validationErrors.push(PasswordErrorType.MinNumberLength);
      }
      if (!PasswordValidator.specialCharacterRegExp.test(testValue)) {
        validationErrors.push(PasswordErrorType.MinSpecialCharacterLength);
      }

      const errors = PasswordValidator.handleErrorCase(validationErrors);

      return validationErrors.length ? errors : null;
    };
  }
}

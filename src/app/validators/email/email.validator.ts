import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EmailErrorType } from '../../models';

export class EmailValidator {
  private static readonly emailPattern = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))' +
    '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

  private static handleErrorCase(errorType: EmailErrorType): ValidationErrors {
    return { [errorType]: true };
  }

  static emailValidator(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      if (!control.value) {
        return EmailValidator.handleErrorCase(EmailErrorType.Required);
      }

      if (!EmailValidator.emailPattern.test(control.value)) {
        return EmailValidator.handleErrorCase(EmailErrorType.Pattern);
      }

      return null;
    };
  }
}

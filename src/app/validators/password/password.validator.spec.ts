import { FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { PasswordErrorType } from '../../models';

describe('validator: PasswordValidator', () => {
  describe('.handleErrorCase(validationErrors)', () => {
    it('should return correct object errors', () => {
      const validationErrors = [PasswordErrorType.MinLength, PasswordErrorType.MinLowercaseLength];
      expect((PasswordValidator as any)
        .handleErrorCase(validationErrors))
        .toEqual({
          [PasswordErrorType.MinLength]: true,
          [PasswordErrorType.MinLowercaseLength]: true
        });
    });
  });

  describe('.passwordValidator()', () => {
    it('should return function', () => {
      expect(PasswordValidator.passwordValidator()).toBeInstanceOf(Function);
    });

    describe('innerFunction', () => {
      it('should return null when a password satisfies rules', () => {
        const password = new FormControl('!Angular2019');
        expect(PasswordValidator.passwordValidator()(password)).toBeNull();
      });

      it('should return correct object when there is no special character', () => {
        const password = new FormControl('Angular2019');
        expect(PasswordValidator.passwordValidator()(password)).toEqual({
          [PasswordErrorType.MinSpecialCharacterLength]: true
        });
      });

      it('should return correct object when length is less than expected', () => {
        const password = new FormControl('!Angul1');
        expect(PasswordValidator.passwordValidator()(password)).toEqual({
          [PasswordErrorType.MinLength]: true
        });
      });

      it('should return correct object when there is no uppercase letter', () => {
        const password = new FormControl('!angular2019');
        expect(PasswordValidator.passwordValidator()(password)).toEqual({
          [PasswordErrorType.MinUppercaseLength]: true
        });
      });

      it('should return correct object when there is no lowercase letter', () => {
        const password = new FormControl('!ANGULAR2019');
        expect(PasswordValidator.passwordValidator()(password)).toEqual({
          [PasswordErrorType.MinLowercaseLength]: true
        });
      });

      it('should return correct object when a password does not contain any number', () => {
        const password = new FormControl('!Angular');
        expect(PasswordValidator.passwordValidator()(password)).toEqual({
          [PasswordErrorType.MinNumberLength]: true
        });
      });
    });
  });
});

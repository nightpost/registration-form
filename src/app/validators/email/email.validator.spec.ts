import { EmailValidator } from './email.validator';
import { EmailErrorType } from '../../models';
import { FormControl } from '@angular/forms';

describe('validator: EmailValidator', () => {
  describe('.handleErrorCase(errorType)', () => {
    it('should return correct object with an error', () => {
      expect((EmailValidator as any).handleErrorCase(EmailErrorType.Required)).toEqual({ [EmailErrorType.Required]: true });
    });
  });

  describe('.emailValidator', () => {
    it('should return function', () => {
      expect(EmailValidator.emailValidator()).toBeInstanceOf(Function);
    });

    describe('innerFunction', () => {
      it('should return correct object when control value is empty', () => {
        const control = new FormControl('');
        const result = EmailValidator.emailValidator()(control);
        expect(result).toEqual({ [EmailErrorType.Required]: true });
      });

      it('should return correct object when control value doesn\'t match a pattern', () => {
        const control = new FormControl('test@mail');
        const result = EmailValidator.emailValidator()(control);
        expect(result).toEqual({ [EmailErrorType.Pattern]: true });
      });

      it('should return null for a correct control value', () => {
        const control = new FormControl('test@mail.com');
        const result = EmailValidator.emailValidator()(control);
        expect(result).toBeNull();
      });
    });
  });
});

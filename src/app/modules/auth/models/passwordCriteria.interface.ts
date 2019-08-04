import { EmailErrorType, PasswordErrorType } from '../../../models';

export interface IFieldCriteria {
  mapping: PasswordErrorType | EmailErrorType;
  description: string;
}

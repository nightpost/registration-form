import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { IPasswordCriteria } from '../../models';

@Component({
  selector: 'as-accept-criteria',
  styleUrls: ['./acceptCriteria.component.scss'],
  templateUrl: './acceptCriteria.component.html'
})
export class AcceptCriteriaComponent {
  @Input() criteria: IPasswordCriteria[];
  @Input() errors: ValidationErrors;
}

import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { IFieldCriteria } from '../../models';

@Component({
  selector: 'as-accept-criteria',
  styleUrls: ['./acceptCriteria.component.scss'],
  templateUrl: './acceptCriteria.component.html'
})
export class AcceptCriteriaComponent {
  @Input() criteria: IFieldCriteria[];
  @Input() errors: ValidationErrors;
}

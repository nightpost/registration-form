import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'as-text-input',
  styleUrls: ['./textInput.component.scss'],
  templateUrl: './textInput.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent {
  @Input() type = 'text';
  @Input() title?: string;
  @Input() placeholder?: string;
  @Input() parent: FormGroup;
  @Input() inputName: string;

  get componentTextInput(): FormControl {
    return this.parent.get(this.inputName) as FormControl;
  }
}

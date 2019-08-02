import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/textInput/textInput.component';

@NgModule({
  declarations: [TextInputComponent],
  exports: [TextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AsCommonModule {}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { TextInputComponent } from './textInput.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('component: TextInputComponent', () => {
  let fixture: ComponentFixture<TextInputComponent>;
  let component: TextInputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent],
      imports: [CommonModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;

    component.parent = new FormGroup({
      email: new FormControl('test@email.com', Validators.required),
      password: new FormControl('', Validators.required),
    });
    component.inputName = 'email';
    component.type = 'text';
    fixture.detectChanges();
  });

  describe('get .componentTextInput', () => {
    it('should return correct FormControl object', () => {
      const input = component.componentTextInput;

      expect(input).toBeInstanceOf(FormControl);
      expect(input.value).toEqual('test@email.com');
    });
  });
});

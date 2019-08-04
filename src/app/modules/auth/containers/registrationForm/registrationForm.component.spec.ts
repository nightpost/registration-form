import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegistrationFormComponent } from './registrationForm.component';

describe('component: RegistrationFormComponent', () => {
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let component: RegistrationFormComponent;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [RegistrationFormComponent],
        imports: [CommonModule, ReactiveFormsModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
  });

  describe('.ngOnInit()', () => {
    it('should call .buildForm() method of the component', () => {
      jest.spyOn((component as any), 'buildForm');

      component.form = null;
      expect(component.form).toBeNull();
      component.ngOnInit();

      expect((component as any).buildForm).toHaveBeenCalled();
      expect(component.form.value).toEqual({
        [component.emailInputField]: '',
        [component.passwordInputField]: ''
      });
    });
  });

  describe('.buildForm()', () => {
    it('should return correct FormGroup object', () => {
      const form = (component as any).buildForm();

      expect(form).toBeInstanceOf(FormGroup);
      expect(form.value).toEqual({
        [component.emailInputField]: '',
        [component.passwordInputField]: ''
      });
    });
  });

  describe('.getFirstError(errors, inputField)', () => {
    it('should return a string with correct error message', () => {
      const errors = { minLength: true };
      const inputField = component.passwordInputField;

      const result = component.getFirstError(errors, inputField);
      expect(result).toBe('Please check "8+ characters" rule*');
    });

    it('should return a string with correct error message', () => {
      const errors = { required: true };
      const inputField = component.emailInputField;

      const result = component.getFirstError(errors, inputField);
      expect(result).toBe('Email is required*');
    });
  });

  describe('get .emailInputControl', () => {
    it('should return a correct value', () => {
      component.ngOnInit();
      component.form.get(component.emailInputField).setValue('test@mail.com');
      expect(component.emailInputControl.value).toBe('test@mail.com');
    });
  });

  describe('get .passwordInputControl', () => {
    it('should return a correct value', () => {
      component.ngOnInit();
      component.form.get(component.passwordInputField).setValue('!Angular2019');
      expect(component.passwordInputControl.value).toBe('!Angular2019');
    });
  });
});

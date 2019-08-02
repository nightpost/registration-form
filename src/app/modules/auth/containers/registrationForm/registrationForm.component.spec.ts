import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registrationForm.component';

describe('component: RegistrationFormComponent', () => {
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let component: RegistrationFormComponent;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [RegistrationFormComponent],
        imports: [CommonModule, ReactiveFormsModule]
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
});

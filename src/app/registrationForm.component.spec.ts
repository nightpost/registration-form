import { TestBed, async } from '@angular/core/testing';
import { RegistrationFormComponent } from './registrationForm.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationFormComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegistrationFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

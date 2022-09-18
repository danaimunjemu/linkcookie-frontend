import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmailconfirmationComponent } from './signup-emailconfirmation.component';

describe('SignupEmailconfirmationComponent', () => {
  let component: SignupEmailconfirmationComponent;
  let fixture: ComponentFixture<SignupEmailconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEmailconfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupEmailconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

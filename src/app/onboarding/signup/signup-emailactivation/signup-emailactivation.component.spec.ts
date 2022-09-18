import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmailactivationComponent } from './signup-emailactivation.component';

describe('SignupEmailactivationComponent', () => {
  let component: SignupEmailactivationComponent;
  let fixture: ComponentFixture<SignupEmailactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEmailactivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupEmailactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerMainComponent } from './jobseeker-main.component';

describe('JobseekerMainComponent', () => {
  let component: JobseekerMainComponent;
  let fixture: ComponentFixture<JobseekerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

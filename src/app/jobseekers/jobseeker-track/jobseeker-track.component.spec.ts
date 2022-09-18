import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerTrackComponent } from './jobseeker-track.component';

describe('JobseekerTrackComponent', () => {
  let component: JobseekerTrackComponent;
  let fixture: ComponentFixture<JobseekerTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

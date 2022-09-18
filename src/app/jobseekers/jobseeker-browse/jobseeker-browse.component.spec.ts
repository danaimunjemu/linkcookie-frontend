import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerBrowseComponent } from './jobseeker-browse.component';

describe('JobseekerBrowseComponent', () => {
  let component: JobseekerBrowseComponent;
  let fixture: ComponentFixture<JobseekerBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

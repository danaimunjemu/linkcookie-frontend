import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseeker-browse',
  templateUrl: './jobseeker-browse.component.html',
  styleUrls: ['./jobseeker-browse.component.css']
})
export class JobseekerBrowseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}

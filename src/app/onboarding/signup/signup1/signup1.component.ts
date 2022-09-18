import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {

  @Output() userTypeSelected = new EventEmitter<{userType: string}>();


  onSelectJobSeeker() {
    this.userTypeSelected.emit({userType: 'Job Seeker'});
  }

  onSelectRecruiter() {
    this.userTypeSelected.emit({userType: 'Recruiter'});
  }

  constructor() { }

  ngOnInit(): void {
  }

}

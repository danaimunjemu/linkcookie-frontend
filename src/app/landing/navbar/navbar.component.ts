import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // NavBar Toggle
  collapsed = true;  
  toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

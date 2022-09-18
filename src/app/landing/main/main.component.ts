import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UsersService } from 'src/app/services/user.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private http:HttpClient,
    public usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  

}

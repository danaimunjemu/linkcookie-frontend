import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin( form: NgForm ) {
    const user = {
      email: form.value.email,
      password: form.value.password
    };
    this.usersService.login(form.value.email, form.value.password);
  }

  constructor(public usersService: UsersService, private http: HttpClient) { }

  ngOnInit(): void {
  }

}

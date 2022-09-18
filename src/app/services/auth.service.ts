import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {

    constructor(private http: HttpClient, private router: Router) {}

    login(email: string, password: string) {
        return this.http.post(environment.server_url + 'authenticate', {
          email,
          password,
        });
      }
    
      logOut() {
        localStorage.clear();
    
        this.router.navigateByUrl('');
      }

      set _Token(token: string) {
        localStorage.setItem('token', token);
      }
    
      get Token() {
        return localStorage.getItem('token');
      }


  }
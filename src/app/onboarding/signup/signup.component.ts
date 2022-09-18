import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router, ActivatedRoute } from '@angular/router';
import { MailService } from 'src/app/services/mail.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // 
  index = 0;
  disable = true;
  onIndexChange(index: number): void {
    this.index = index;
  }

  signup1 = false;
  signup2 = true;

  // Sign Up Information
  user = {
    userType: '',
    email: '',
    password: '',
    dateCreated: new Date(),
    status: 'Pending',
    confirmationCode: ''
  }



  onUserTypeSelected(userData: {userType: string}) {
    this.user.userType = userData.userType;
    this.disable = false;
    console.log(this.user);
  }

  onUserInfoSubmitted(userInfo: { email: string, password: string, confirmPassword: string}) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let uniqueCode = ''
    for (let i = 0; i < 25; i++) {
        uniqueCode += characters[Math.floor(Math.random() * characters.length )];
    }
    this.user.email = userInfo.email;
    this.user.password = userInfo.password;
    this.user.dateCreated = new Date();
    this.user.confirmationCode = uniqueCode;
    console.log(this.user);
    this.usersService.addUser(this.user)
    .subscribe((result: any) => {
      console.log(result);
      console.log(result.user.confirmationCode);
      this.sendMail(result.user);
      console.log("User added successfully");
      setInterval(() =>
      this.router.navigate(['../emailconfirmation'], {relativeTo: this.route})
      , 2000);

    }, (err: HttpErrorResponse) => {
      console.log(err.error.message);
      this.createMessage('error', err.error.message);
    });

  }

  selectSignUp(signup: number) {
    this.index = signup;
    if (this.index == 0) {
      this.signup1 = false;
      this.signup2 = true;
    }
    else if (this.index == 1) {
      this.signup1 = true;
      this.signup2 = false;
    }
  }

  createMessage(type: string, message:string): void {
    this.message.create(type, message);
  }

  sendMail(user: any) {
    const email = {
      recepient: user.email,
      subject: 'LinkCookie Confirmation Email',
      // text: 'Confirmation Code: ' + user.confirmationCode,
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${user.email}</h2>
      <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
      <a href=http://localhost:4200/#/emailactivation/${user.confirmationCode}> Click here</a>
      </div>`
    }
    this.mailService.sendEmail(email)
    .subscribe((result: any) => {
      console.log(result);
      console.log("Email sent successfully");

    }, (err: HttpErrorResponse) => {
      console.log(err.error.message);
    });
  }

  constructor(
    public usersService: UsersService, 
    private http: HttpClient, 
    private message: NzMessageService, 
    private router: Router, 
    private route: ActivatedRoute,
    public mailService: MailService
    ) { }

  ngOnInit(): void {
  }

}

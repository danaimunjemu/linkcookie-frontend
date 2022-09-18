import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.css']
})
export class JobseekerDashboardComponent implements OnInit {

  constructor(
    private http:HttpClient,
    public mailService: MailService
  ) { }

  ngOnInit(): void {
  }

  sendMail() {
    console.log('Here')
    const email = {
      mailId: '111',
      recepient: 'danaimunjemu8@gmail.com',
      subject: 'Hey',
      body: 'Just sent this email properly'
    }
    this.mailService.sendEmail(email)
    .subscribe((result: any) => {
      console.log(result);
      console.log("Email sent successfully");

    }, (err: HttpErrorResponse) => {
      console.log(err.error.message);
    });
  }

}

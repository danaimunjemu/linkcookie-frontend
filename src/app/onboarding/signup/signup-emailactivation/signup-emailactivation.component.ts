import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-signup-emailactivation',
  templateUrl: './signup-emailactivation.component.html',
  styleUrls: ['./signup-emailactivation.component.css']
})
export class SignupEmailactivationComponent implements OnInit {

  confirmationCode: any = '';
  emailActivation?: boolean;

  constructor(
    private route: ActivatedRoute,
    public usersService: UsersService,
    private router: Router,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.confirmationCode = this.route.snapshot.paramMap.get('confirmationCode');
    console.log(this.confirmationCode);
    this.usersService.activateUser(this.confirmationCode).subscribe((result: any) => {
      console.log(result);
      console.log("Email Activated Successfully");
      this.emailActivation = true;

    }, (err: HttpErrorResponse) => {
      console.log(err.error.message);
      this.createMessage('error', err.error.message);
      this.emailActivation = false;
    });
  }

  createMessage(type: string, message:string): void {
    this.message.create(type, message);
  }

}

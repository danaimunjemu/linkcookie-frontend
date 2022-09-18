import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { from } from 'rxjs';


@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  @Output() userInfoSubmitted = new EventEmitter<{ email: string, password: string, confirmPassword: string}>();


  onSignUp( form: NgForm ) {
    if ( form.value.password != form.value.confirmPassword) {
      this.createMessage('error', 'Passwords do no match');
    } else {
      const user = {
        email: form.value.email,
        password: form.value.password,
        confirmPassword: form.value.confirmPassword,
      };
      this.userInfoSubmitted.emit(user);
    }
  }

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    
  }

  createMessage(type: string, message:string): void {
    this.message.create(type, message);
  }

}

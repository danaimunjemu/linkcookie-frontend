import { Injectable } from "@angular/core";
import { Mail } from "../models/mail.model";
// import { AuthData } from "../models/auth.model";
import { BehaviorSubject, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { AuthData } from "../models/auth.model";

@Injectable({ providedIn: 'root' })
export class MailService {



    constructor(
        private http: HttpClient,
        private router: Router,
        private notificationService: NzNotificationService) {
        this.init();

    }


    init() {};

    

    sendEmail(email: any) {
        return this.http.post(environment.server_url + 'mail', email);
    }

}
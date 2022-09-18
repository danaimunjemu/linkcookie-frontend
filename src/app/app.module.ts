import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// NG-ZORRO Components
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTagModule } from 'ng-zorro-antd/tag';


import { NavbarComponent } from './landing/navbar/navbar.component';
import { HomeComponent } from './landing/home/home.component';
import { JobseekersComponent } from './landing/jobseekers/jobseekers.component';
import { RecruitersComponent } from './landing/recruiters/recruiters.component';
import { ContactComponent } from './landing/contact/contact.component';
import { MainComponent } from './landing/main/main.component';
import { SignupComponent } from './onboarding/signup/signup.component';
import { Signup1Component } from './onboarding/signup/signup1/signup1.component';
import { Signup2Component } from './onboarding/signup/signup2/signup2.component';
import { SignupEmailactivationComponent } from './onboarding/signup/signup-emailactivation/signup-emailactivation.component';
import { SignupEmailconfirmationComponent } from './onboarding/signup/signup-emailconfirmation/signup-emailconfirmation.component';
import { LoginComponent } from './onboarding/login/login.component';
import { JobseekerMainComponent } from './jobseekers/jobseeker-main/jobseeker-main.component';
import { JobseekerDashboardComponent } from './jobseekers/jobseeker-dashboard/jobseeker-dashboard.component';
import { JobseekerBrowseComponent } from './jobseekers/jobseeker-browse/jobseeker-browse.component';
import { JobseekerTrackComponent } from './jobseekers/jobseeker-track/jobseeker-track.component';
import { JobseekerProfileComponent } from './jobseekers/jobseeker-profile/jobseeker-profile.component';
import { JobseekerSettingsComponent } from './jobseekers/jobseeker-settings/jobseeker-settings.component';
import { HttpConfigInterceptor } from './constants/helpers/http.interceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JobseekersComponent,
    RecruitersComponent,
    ContactComponent,
    MainComponent,
    SignupComponent,
    Signup1Component,
    Signup2Component,
    SignupEmailactivationComponent,
    SignupEmailconfirmationComponent,
    LoginComponent,
    JobseekerMainComponent,
    JobseekerDashboardComponent,
    JobseekerBrowseComponent,
    JobseekerTrackComponent,
    JobseekerProfileComponent,
    JobseekerSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzStepsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCardModule,
    NzNotificationModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzAvatarModule,
    NzModalModule,
    NzMessageModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzTableModule,
    NzEmptyModule,
    NzTagModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './constants/helpers/auth-guard';
import { LogGuard } from './constants/helpers/log-guard';
import { JobseekerBrowseComponent } from './jobseekers/jobseeker-browse/jobseeker-browse.component';
import { JobseekerDashboardComponent } from './jobseekers/jobseeker-dashboard/jobseeker-dashboard.component';
import { JobseekerMainComponent } from './jobseekers/jobseeker-main/jobseeker-main.component';
import { JobseekerProfileComponent } from './jobseekers/jobseeker-profile/jobseeker-profile.component';
import { JobseekerSettingsComponent } from './jobseekers/jobseeker-settings/jobseeker-settings.component';
import { JobseekerTrackComponent } from './jobseekers/jobseeker-track/jobseeker-track.component';
import { ContactComponent } from './landing/contact/contact.component';
import { HomeComponent } from './landing/home/home.component';
import { JobseekersComponent } from './landing/jobseekers/jobseekers.component';
import { MainComponent } from './landing/main/main.component';
import { RecruitersComponent } from './landing/recruiters/recruiters.component';
import { LoginComponent } from './onboarding/login/login.component';
import { SignupEmailactivationComponent } from './onboarding/signup/signup-emailactivation/signup-emailactivation.component';
import { SignupEmailconfirmationComponent } from './onboarding/signup/signup-emailconfirmation/signup-emailconfirmation.component';
import { SignupComponent } from './onboarding/signup/signup.component';
import { Signup1Component } from './onboarding/signup/signup1/signup1.component';
import { Signup2Component } from './onboarding/signup/signup2/signup2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
      children: [
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: 'main', component: MainComponent },
        { path: 'jobseekers', component: JobseekersComponent },
        { path: 'recruiters', component: RecruitersComponent },
        { path: 'contact-us', component: ContactComponent }
      ]
  },

  { path: 'login', component: LoginComponent, canActivate: [LogGuard] },

  { path: 'signup', component: SignupComponent,  canActivate: [LogGuard], 
      children: [
        { path: 'accounttype', component: Signup1Component },
        { path: 'accountinfo', component: Signup2Component }
      ]
  },
  { path: 'emailconfirmation', component: SignupEmailconfirmationComponent },
  { path: 'emailactivation/:confirmationCode', component: SignupEmailactivationComponent },

  { path: 'jobseeker-main', component: JobseekerMainComponent,  canActivate: [AuthGuard], 
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: JobseekerDashboardComponent },
        { path: 'browse', component: JobseekerBrowseComponent },
        { path: 'track', component: JobseekerTrackComponent },
        { path: 'profile', component: JobseekerProfileComponent },
        { path: 'settings', component: JobseekerSettingsComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

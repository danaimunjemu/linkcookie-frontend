import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DeauthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private usersService: UsersService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.usersService.Token) {
      this.router.navigateByUrl('/login');
      return false;
    }
    if (this.usersService.Type == 'corporate') {
        this.router.navigateByUrl('/recruiter-main');
        return false;
    }
    console.log("logged in individual!!!");
    return true;
  }
}

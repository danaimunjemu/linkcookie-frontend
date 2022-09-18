import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-jobseeker-main',
  templateUrl: './jobseeker-main.component.html',
  styleUrls: ['./jobseeker-main.component.css']
})
export class JobseekerMainComponent implements OnInit {

  isCollapsed = false;
  user: User;


  


  constructor(
    private usersService: UsersService,
    private modal: NzModalService
    ) { 
      this.user = usersService.User;
  }

  initUser(){
    this.usersService.Account.subscribe((user:any)=>{
      this.user=user
    });
  }

  ngOnInit(): void {
    this.initUser();
  }

  // NavBar Toggle
  collapsed = true;  
  toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to logout?',
      // nzContent: '<div class="d-flex justify-content-center"><img src="../../../assets/images/logout.svg" style="max-width: 200px;" alt=""></div>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.onLogout(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  onLogout() {
    this.usersService.logOut();
  }

}

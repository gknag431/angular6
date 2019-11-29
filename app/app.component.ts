import { Component } from '@angular/core';

import { AccountService } from './account/accountServices';
import { AppUser } from './account/model/appUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {

  loginUser: AppUser;

  constructor(
    private accountService: AccountService,
  ) { }

    ngOnInit() {

      this.loginUser = new AppUser();

      this.accountService.getLoginUser(true).subscribe(
          user => {
              this.loginUser = user;
              sessionStorage.setItem("role", "Param User Maker");
          },
          (err) => {
              // window.location.href = '/logout';
              // sessionStorage.clear();
          });
  }
  
  logout(): void {
    window.location.href = '/logout';
    sessionStorage.clear();
  }

}
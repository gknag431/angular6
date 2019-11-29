import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServiceResponse } from '../common/serviceResponse';
import { AppUser } from './model/appUser';

@Injectable()
export class AccountService {

    private getLoginUserApi = 'assets/user.json';
    
    private loginUser: AppUser;

    constructor(private http: HttpClient) { }

    getLoginUser(force: boolean = false): Observable<AppUser> {

        if (force !== true && this.loginUser)
            return of(this.loginUser) as Observable<AppUser>;

        return this.http.get<AppUser>(this.getLoginUserApi)
        .pipe(
            map(svcResponse => {

                if (svcResponse) {
                    var user = svcResponse;

                    if (user)
                       // this.loginUser = user;
                        this.loginUser.country="Singapore";
                        this.loginUser.name="viewer1";
                        this.loginUser.role="Param User Maker";
                        this.loginUser.userId="viewer1";
                        
                    return this.loginUser;
                }
                else
                {
                    //throw Observable.throw(new Error(svcResponse));
                }

            })
        );
    }

    logout() {
        window.location.href = "/logout";
    }
}
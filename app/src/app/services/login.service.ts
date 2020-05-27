import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable({ providedIn: 'root' })
export class LoginService {
    public currentUser: Observable<User>;
    constructor(private api: ApiService) { }
    IsLogin : false;
    login(username, password) {
        
        var user = this.api.login(`${environment.authanticationUrl}`, { username: username,password:password })
        this.currentUser =  JSON.parse(localStorage.getItem('currentUser'))
        return user;
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
      
    }
}
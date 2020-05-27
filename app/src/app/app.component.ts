import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {

    constructor(
        private router: Router,
        private loginService: LoginService
        
    ) 
    {
        
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}

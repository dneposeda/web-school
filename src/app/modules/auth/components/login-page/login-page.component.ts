import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import { IUserAuth } from 'src/app/interfaces/iuser';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
    user: IUserAuth;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.user = {
            email: '',
            password: '',
        };
    }

    login() {
        this.authService.login(this.user).subscribe(() => {
            this.router.navigate(['/']);
        });
    }

}

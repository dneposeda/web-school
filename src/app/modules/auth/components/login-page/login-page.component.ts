import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
    email: string;

    password: string;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    login() {
        this.authService.login(this.email);
        this.router.navigate(['/']);
    }

}

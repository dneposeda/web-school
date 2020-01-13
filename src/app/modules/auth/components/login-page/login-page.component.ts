import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import { IUserAuth } from 'src/app/interfaces/iuser';
import { NgForm } from '@angular/forms';

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


    login(loginForm: NgForm): void {
        // Form model
        console.log(loginForm.form);
        // Form value ( {"email":"mail@mail.ru","password":"123456"} )
        console.log(`Saved: ${JSON.stringify(loginForm.value)}`);

        this.authService.login(loginForm.value).subscribe(() => {
            this.router.navigate(['/']);
        });
    }

}

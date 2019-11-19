import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public isAuth: Boolean;

    constructor() { }

    login() {
        console.log('Logged in successfully', this.isAuth)
        this.isAuth = true;
    }

    logout() {
        console.log('logout')
        this.isAuth = false;
    }

    isAuthenticated(): Boolean {
        console.log('isAuth', this.isAuth)
        return this.isAuth;
    }

    getUserInfo() {
        console.log('getUserInfo')
    }
}

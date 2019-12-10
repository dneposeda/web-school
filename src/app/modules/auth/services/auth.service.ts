import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private username: string;

    constructor() {
        this.username = localStorage.getItem('username');
    }

    isAuthenticated(): boolean {
        return !!this.username;
    }

    logout() {
        this.username = null;
        localStorage.removeItem('username');
    }

    getUserInfo(): string {
        return this.username;
    }

    login(username: string) {
        this.username = username;
        localStorage.setItem('username', username);
    }
}

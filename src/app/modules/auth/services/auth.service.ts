import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {IUser} from '../../../interfaces/iuser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:4280';
    private token: string;

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('accessToken');
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    logout() {
        this.token = null;
        localStorage.removeItem('accessToken');
    }

    getUserInfo(): Observable<IUser> {
        if (!this.token) {
            return of(null);
        }

        return this.http.get<IUser>(`${this.baseUrl}/users/1`);
    }

    getToken(): string {
        return this.token;
    }

    login(user: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/login`, user).pipe(
            tap((data: any) => {
                this.token = data.accessToken;
                localStorage.setItem('accessToken', this.token);
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<any> {
        return throwError(error);
    }
}

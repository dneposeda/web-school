import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../modules/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor  {

    constructor(private authService: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqClone: HttpRequest<any>;

        if (this.authService.isAuthenticated()) {
            reqClone = req.clone({
                setHeaders: {Authorization: `Bearer ${this.authService.getToken()}`},
            });
        } else {
            reqClone = req;
        }

        return next.handle(reqClone);
    }
}

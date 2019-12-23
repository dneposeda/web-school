import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    public userName: Observable<string>;
    // Icons FontAwesome
    faUser = faUser;
    faSignOutAlt = faSignOutAlt;

    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.userName = this.authService
            .getUserInfo()
            .pipe(
                map(user => user ? user.firstName + ' ' + user.lastName : '')
            );
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    login() {
        this.router.navigate(['/login']);
    }
}

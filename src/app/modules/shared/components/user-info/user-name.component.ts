import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-user-name',
    template: `{{ userName$ | async }}`,
})
export class UserNameComponent implements OnInit {
    public userName$: Observable<string>;

    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.userName$ = this.authService
            .getUserInfo()
            .pipe(
                map(user => user ? user.firstName + ' ' + user.lastName : '')
            );
    }
}

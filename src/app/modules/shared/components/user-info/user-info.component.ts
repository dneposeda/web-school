import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    // Icons FontAwesome
    faUser = faUser;
    faSignOutAlt = faSignOutAlt;

    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    login() {
        this.router.navigate(['/login']);
    }
}

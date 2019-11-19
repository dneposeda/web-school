import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    public isAuth: Boolean;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.isAuth = this.authService.isAuthenticated();
    }



}

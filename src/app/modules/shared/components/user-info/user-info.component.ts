import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    // Icons FontAwesome
    faUser = faUser;
    faSignOutAlt = faSignOutAlt;

    constructor() { }

    ngOnInit() {
    }

}

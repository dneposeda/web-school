import { Component, OnInit } from '@angular/core';
import { LoadingService } from './modules/shared/services/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public loading: boolean;

    constructor(public loadingService: LoadingService) { }

    ngOnInit() {
        this.loadingService.loading$.subscribe(state => {
            this.loading = state;
        });
    }
}

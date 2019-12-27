import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from './modules/shared/services/loading.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public loading = false;

    constructor(
        public loadingService: LoadingService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.loadingService.loading$.pipe(
            untilDestroyed(this),
        ).subscribe(state => {
            this.loading = state;
            this.cdRef.detectChanges();
        });
    }

    ngOnDestroy() {}
}

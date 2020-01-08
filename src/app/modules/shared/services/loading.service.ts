import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading$ = new Subject<boolean>();
    private count = 0; // for test

    constructor() { }

    public showLoading(): void {
        console.log('+', this.count); // for test
        this.count++; // for test
        this.loading$.next(false); // временно убрал появления спинера
    }

    public hideLoading(): void {
        console.log('-', this.count); // for test
        this.count--; // for test
        this.loading$.next(false);
    }
}

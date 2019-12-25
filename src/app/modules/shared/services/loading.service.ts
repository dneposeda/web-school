import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading$ = new Subject<boolean>();
    private count = 0;

    constructor() { }

    public showLoading(): void {
        console.log('+', this.count);
        this.count++;
        this.loading$.next(true);
    }

    public hideLoading(): void {
        console.log('-', this.count);
        this.count--;
        this.loading$.next(false);
    }
}

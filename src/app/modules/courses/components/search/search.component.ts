import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

    searchText = '';
    search$ = new Subject<string>();

    @Output() text: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        this.search$.pipe(
            debounceTime(1000),
            filter((query) => query.length >= 3 || query === ''),
            distinctUntilChanged(),
            untilDestroyed(this),
        ).subscribe(
            query => this.text.emit(query),
        );
    }

    ngOnDestroy() {} // This method must be present, even if empty. https://github.com/ngneat/until-destroy#use-with-view-engine

    find(): void {
        this.search$.next(this.searchText);
    }

}



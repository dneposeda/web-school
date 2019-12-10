import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent  {

    date = '31-12-2019';

    @Input() label = 'Name label';
    // @Output() Output: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.css']
})
export class DurationFieldComponent {

    label = 'Name Field';
    duration = 88;

    constructor() { }



}

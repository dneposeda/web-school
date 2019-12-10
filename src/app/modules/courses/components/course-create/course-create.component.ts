import { Component } from '@angular/core';

@Component({
    selector: 'app-course-create',
    templateUrl: './course-create.component.html',
    styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {

    title: string;
    description: string;
    duration: number;
    date: string;
    authors: string;

    constructor() { }

    save() {
        console.log('save');
    }

    cancel() {
        console.log('cancel');
    }

}

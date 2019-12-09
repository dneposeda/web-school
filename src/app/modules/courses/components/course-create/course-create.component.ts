import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    save() {
        console.log('save');
    }

    cancel() {
        console.log('cancel');
        this.router.navigate(['courses']);
    }

}

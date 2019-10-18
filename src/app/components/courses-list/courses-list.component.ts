import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces/icourse';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

    public courses: Array<ICourse>;

    constructor() {
        this.courses = [
            {
                id: 1,
                title: 'Video Course 1. Name tag',
                creationDate: '30 May, 2018',
                duration: 88,
                description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
            }, {
                id: 2,
                title: 'Video Course 2. Name tag',
                creationDate: '9 Nov, 2018',
                duration: 61,
                description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
            }, {
                id: 3,
                title: 'Video Course 3. Name tag',
                creationDate: '10 Apr, 2018',
                duration: 59,
                description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
            }
        ];
    }

    ngOnInit() {
    }

}

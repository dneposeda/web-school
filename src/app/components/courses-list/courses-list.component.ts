import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces/icourse';
import { FilterByPipe } from 'src/app/pipe/filter-by.pipe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
    providers: [
        FilterByPipe,
    ]
})
export class CoursesListComponent implements OnInit {

    // Icons FontAwesome
    faPlus = faPlus;

    courses: Array<ICourse>;
    coursesList: Array<ICourse>;


    constructor( private filterBy: FilterByPipe) {}

    ngOnInit() {
        this.courses = [
            {
                id: 1,
                title: 'Video Course 1. JavaScript',
                creationDate: '30 Oct 2019',
                duration: 88,
                description:
                    `Learn about where you can find course descriptions, what information they include, how they work,
                    and details about various components of a course description. Course descriptions report information
                    about a university or college's classes. They're published both in course catalogs that outline degree
                    requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
                topRated: true,
            }, {
                id: 2,
                title: 'Video Course 2. Java tag',
                creationDate: '11/12/2019',
                duration: 61,
                description:
                    `Learn about where you can find course descriptions, what information they include, how they work,
                    and details about various components of a course description. Course descriptions report information
                    about a university or college's classes. They're published both in course catalogs that outline degree
                    requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
                topRated: false,
            }, {
                id: 3,
                title: 'Video Course 3. Name tag',
                creationDate: '28 Sep 2019',
                duration: 59,
                description:
                    `Learn about where you can find course descriptions, what information they include, how they work, and details
                    about various components of a course description. Course descriptions report information about a university or
                    college's classes. They're published both in course catalogs that outline degree requirements and in course
                    schedules that contain descriptions for all courses offered during a particular semester.`,
                topRated: false,
            }, {
                id: 4,
                title: 'Video Course 4. PHP',
                creationDate: '09 November 2019',
                duration: 60,
                description:
                    `Learn about where you can find course descriptions, what information they include, how they work, and details
                    about various components of a course description. Course descriptions report information about a university or
                    college's classes. They're published both in course catalogs that outline degree requirements and in course
                    schedules that contain descriptions for all courses offered during a particular semester.`,
                topRated: true,
            }
        ];

        this.coursesList = this.courses;
    }

    loadMoreCourses(): void {
        console.log('Load more course');
    }

    deleteCourse(id: any): void {
        console.log(id);
    }

    find(searchText: string){
        this.coursesList = this.filterBy.transform(this.courses, 'title', searchText)
    }

}

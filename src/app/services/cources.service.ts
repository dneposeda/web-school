import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/icourse';

@Injectable({
    providedIn: 'root'
})
export class CourcesService {
    private courses: Array<ICourse>;

    constructor() {
        this.courses = [
            {
                id: 1,
                title: 'Video Course 1. JavaScript',
                creationDate: '06 Dec 2019',
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
                creationDate: '12/30/2019',
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
    }

    getList(): Array<ICourse> {
        return this.courses;
    }

    getItemById(id: number): void {
        console.log('getItemById');
    }

    updateItem(id: number): void {
        console.log('updateItem');
    }

    removeItem(id: number): void {
        const index = this.courses.findIndex(item => item.id === id);
        if (index >= 0) {
            this.courses = this.courses.slice(0);
            this.courses.splice(index, 1);
        }
    }

    createCourse(course): void {
        console.log('createCourse');
    }
}

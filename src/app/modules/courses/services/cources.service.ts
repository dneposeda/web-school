import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../../../interfaces/icourse';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CourcesService {
    private baseUrl = 'http://localhost:4280/courses';
    private courses: Array<ICourse>;

    constructor(private http: HttpClient) {
        this.courses = [];
    }

    getList(): Observable<ICourse[]> {
        return this.http.get<ICourse>(this.baseUrl)
            .pipe(
                tap(data => console.log('Get All Courses', data)),
                catchError(this.handleError)
            );
    }

    getItemById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    updateItem(item: ICourse): void {
        console.log('updateItem', item);
    }

    removeItem(id: number): void {
        const index = this.courses.findIndex(item => item.id === id);
        if (index >= 0) {
            this.courses = this.courses.slice(0);
            this.courses.splice(index, 1);
        }
    }

    createCourse(item: ICourse): void {
        console.log('createCourse', item);
    }

    private handleError(error: any): Observable<any> {
        console.log(error);
        return throwError(error);
    }
}

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

    constructor(private http: HttpClient) { }

    getList(count): Observable<ICourse[]> {
        return this.http.get<ICourse>(`${this.baseUrl}?_start=0&_limit=${count}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    getCourseById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    updateCourse(item: ICourse): Observable<any> {
        return this.http.put(`${this.baseUrl}/${item.id}`, item);
    }

    removeCourse(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    createCourse(item: ICourse): Observable<ICourse> {
        return this.http.post<ICourse>(this.baseUrl, item);
    }

    findCourses(query: string): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(`${this.baseUrl}?q=${query}`);
    }

    private handleError(error: any): Observable<any> {
        return throwError(error);
    }
}

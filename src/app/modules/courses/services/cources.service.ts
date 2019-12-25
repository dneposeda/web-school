import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../../../interfaces/icourse';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadingService } from '../../shared/services/loading.service';

@Injectable({
    providedIn: 'root'
})
export class CourcesService {
    private baseUrl = 'http://localhost:4280/courses';

    constructor(private http: HttpClient, private loadingService: LoadingService) { }

    getList(count: number, searchText?: string): Observable<ICourse[]> {
        this.loadingService.showLoading();

        const params: {[name: string]: string} = {
            _start: '0',
            _limit: count + '',
        };
        if (searchText) {
            params.q = searchText;
        }

        return this.http.get<ICourse>(`${this.baseUrl}`, {params})
            .pipe(
                catchError(this.handleError) // В этом нет смысла. С таким handleError() - это повторение дефолтного поведения
            );
    }

    getCourseById(id: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    updateCourse(item: ICourse): Observable<any> {
        this.loadingService.showLoading();
        return this.http.put(`${this.baseUrl}/${item.id}`, item);
    }

    removeCourse(id: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    createCourse(item: ICourse): Observable<ICourse> {
        this.loadingService.showLoading();
        return this.http.post<ICourse>(this.baseUrl, item);
    }

    private handleError(error: any): Observable<any> {
        return throwError(error);
    }
}

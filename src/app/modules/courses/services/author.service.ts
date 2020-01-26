import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IAuthor {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthorService {
    private baseUrl = 'http://localhost:4280/authors';

    constructor(private http: HttpClient) { }

    getList(): Observable<IAuthor[]> {
        return this.http.get<IAuthor[]>(this.baseUrl);
    }
}

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CoursesActions from './courses.actions';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, map, catchError, tap, count, pluck, concatMap } from 'rxjs/operators';
import { CourcesService } from './../../../modules/courses/services/cources.service';
import { ICourse } from 'src/app/interfaces/icourse';

import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {

    getCourses$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.getCourses),
            pluck('count'),
            switchMap((amount) => this.getList(amount))
        )
    );

    getList(amount: number) {
        return this.courcesService.getList(amount).pipe(
            map(cources => CoursesActions.getCoursesSuccess({ cources })),
            catchError(error => {
                return of(CoursesActions.getCoursesError({ error: error.message }));
            })
        );
    }

    getCourse$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.getCourse),
            pluck('courseID'),
            switchMap(id => this.getCourse(id))
        )
    );

    getCourse(id: number) {
        return this.courcesService.getCourseById(id).pipe(
            map(course => CoursesActions.getCourseSuccess({ course })),
            catchError(error => {
                return of(CoursesActions.getCourseError({ error: error.message }));
            })
        );
    }


    updateCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
            ofType(CoursesActions.updateCourse),
            pluck('course'),
            concatMap((course: ICourse) => this.courcesService.updateCourse(course).pipe(
                map(course => {
                    this.router.navigate(['/courses'])
                    return CoursesActions.updateCourseSuccess({ course })
                }),
            )),
            catchError(error => {
                return of(CoursesActions.updateCourseError({ error: error.message }));
            })
        )
    );

    createCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
            ofType(CoursesActions.createCourse),
            pluck('course'),
            concatMap((course: ICourse) => this.courcesService.createCourse(course).pipe(
                map(course => {
                    this.router.navigate(['/courses'])
                    return CoursesActions.createCourseSuccess({ course })
                }),
                catchError(error => {
                    return of(CoursesActions.createCourseError({ error: error.message }));
                })
            ))
        )
    );

    deleteCourse$: Observable<Action> = createEffect(() => this.actions$.pipe(
            ofType(CoursesActions.deleteCourse),
            pluck('course'),
            concatMap((course: ICourse) => this.courcesService.removeCourse(course.id).pipe(
                    map(() => {
                        return CoursesActions.deleteCourseSuccess({ course })
                    }),
                    catchError(error => {
                        return of(CoursesActions.deleteCourseError({ error: error.message }));
                    })
                )
            )
        )
    );



    constructor(
        private actions$: Actions,
        private courcesService: CourcesService,
        private router: Router,
    ) {}

}

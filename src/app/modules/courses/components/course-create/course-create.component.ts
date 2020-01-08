import {Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../../../interfaces/icourse';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';
import { Store, select } from '@ngrx/store';
import { AppState } from './../../../../core/@ngrx';
import * as CoursesActions from './../../../../core/@ngrx/courses/courses.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-course-create',
    templateUrl: './course-create.component.html',
    styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit, OnDestroy {
    id: number;
    model: ICourse;
    breadcrumbItems: IBreadcrumb[];
    private componentDestroyed$: Subject<void> = new Subject<void>();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');

        this.model = {
            id: null,
            title: '',
            creationDate: '',
            duration: 0,
            description: '',
            topRated: false,
            authors: null,
        };

        this.breadcrumbItems = [
            {title: 'Courses', routeLink: '/courses'},
        ];

        if (this.id) {
            this.breadcrumbItems.push({title: 'Edit'});

            this.store.pipe(
                select('courses'),
                takeUntil(this.componentDestroyed$)
            ).subscribe(coursesState => {
                this.model = { ...coursesState.selectCourse };
            });

            this.store.dispatch(CoursesActions.getCourse({ courseID: +this.id }));
        } else {
            this.breadcrumbItems.push({title: 'New course'});
        }
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }

    save() {
        const course = { ...this.model } as ICourse;
        if (this.id) {
            // this.updateCourse(this.model);
            this.store.dispatch(CoursesActions.updateCourse({ course }));
        } else {
            // this.createCourse(this.model);
            this.store.dispatch(CoursesActions.createCourse({ course }));
        }
    }

    cancel() {
        this.router.navigate(['courses']);
    }

    // private createCourse(item: ICourse) {
    //     const course = { ...item } as ICourse;
    //     this.store.dispatch(CoursesActions.createCourse({ course }));
    // }

    // private updateCourse(item: ICourse) {
    //     const course = { ...item } as ICourse;
    //     this.store.dispatch(CoursesActions.updateCourse({ course }));
    // }
}

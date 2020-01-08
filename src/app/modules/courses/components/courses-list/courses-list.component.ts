import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/interfaces/icourse';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { Store, select } from '@ngrx/store';
import { AppState, CoursesState } from '../../../../core/@ngrx';
import * as CoursesActions from './../../../../core/@ngrx/courses/courses.actions';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {

    // Icons FontAwesome
    faPlus = faPlus;

    // coursesState$: Observable<CoursesState>;
    breadcrumbItems: IBreadcrumb[];
    coursesList$: Observable<CoursesState>;

    private count = 4;
    private searchText: string;

    constructor(
        private store: Store<AppState>,
        private router: Router,
        private loadingService: LoadingService,
    ) {}

    ngOnInit() {
        this.breadcrumbItems = [
            {title: 'Courses'}
        ];
        this.coursesList$ = this.store.pipe(select('courses'));
        this.store.dispatch(CoursesActions.getCourses({ count: this.count }));
        console.log('We have a store! ', this.store);
    }

    loadMoreCourses(): void {
        this.count += 4;
        this.store.dispatch(CoursesActions.getCourses({ count: this.count }));
    }

    deleteCourse(course: ICourse): void {
        if (!confirm(`Are you sure you want to delete?\nId course - ${course.id}`)) { return; }
        const courseToDelete: ICourse = { ...course };
        this.store.dispatch(CoursesActions.deleteCourse({ course: courseToDelete }));
    }

    find(searchText: string) {
        this.searchText = searchText;
        // this.getCourses();
        // this.store.dispatch(CoursesActions.getCourses({ count: this.count }));
    }

    create() {
        this.router.navigate(['/courses/new']);
    }

}

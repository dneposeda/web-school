import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../../../../interfaces/icourse';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';
import { Store, select } from '@ngrx/store';
import { AppState } from './../../../../core/@ngrx';
import * as CoursesActions from './../../../../core/@ngrx/courses/courses.actions';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthorService, IAuthor } from '../../services/author.service';

@Component({
    selector: 'app-course-create',
    templateUrl: './course-create.component.html',
    styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit, OnDestroy {
    id: number;
    model: ICourse;
    breadcrumbItems: IBreadcrumb[];
    courseForm: FormGroup;
    private componentDestroyed$: Subject<void> = new Subject<void>();

    placeholder = {
        title: 'Entry course title',
        creationDate: 'Entry description',
        duration: 'Entry duration',
        description: 'Entry date',
        authors: 'Entry authors',
    };

    authors$: Observable<IAuthor[]>;
    // users = [
    //     {id: '1', name: 'Anjmao'},
    //     {id: '2', name: 'Tadeus Varnas'}
    // ];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<AppState>,
        private fb: FormBuilder,
        private authorService: AuthorService,
    ) {
        this.buildForm();
    }

    ngOnInit(): void {
        this.getListAuthor();

        this.id = +this.route.snapshot.paramMap.get('id');

        this.breadcrumbItems = [
            { title: 'Courses', routeLink: '/courses' },
        ];

        if (this.id) {
            this.breadcrumbItems.push({ title: 'Edit' });

            this.store.pipe(
                select('courses'),
                takeUntil(this.componentDestroyed$)
            ).subscribe(coursesState => {
                this.model = { ...coursesState.selectCourse };
                this.patchFormValues();
            });

            this.store.dispatch(CoursesActions.getCourse({ courseID: +this.id }));
        } else {
            this.model = {
                id: null,
                topRated: false,
                title: '',
                description: '',
                duration: 0,
                creationDate: '',
                authors: []
            };

            this.breadcrumbItems.push({ title: 'New course' });
        }
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }

    getListAuthor() {
        this.authors$ = this.authorService.getList();
    }

    private buildForm() {
        this.courseForm = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            duration: [],
            creationDate: [],
            authors: [],
        });
    }

    private patchFormValues() {
        this.courseForm.patchValue({
            title: this.model.title,
            description: this.model.description,
            duration: { duration: this.model.duration || ''},
            creationDate: { creationDate: this.model.creationDate || ''},
            authors: { authors: this.model.authors || ''}
        });
    }

    save() {
        const form = this.courseForm.getRawValue();
        const course: ICourse = {
            id: this.model.id || null,
            topRated: this.model.topRated || null,
            title: form.title,
            description: form.description,
            duration: form.duration.duration,
            creationDate: form.creationDate.creationDate,
            authors: form.authors.authors
        };

        console.log(form, course);
        if (this.id) {
            this.store.dispatch(CoursesActions.updateCourse({ course }));
        } else {
            this.store.dispatch(CoursesActions.createCourse({ course }));
        }
    }

    cancel() {
        this.router.navigate(['courses']);
    }
}

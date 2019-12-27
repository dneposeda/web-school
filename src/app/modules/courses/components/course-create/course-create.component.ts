import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../../../interfaces/icourse';
import {CourcesService} from '../../services/cources.service';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';

@Component({
    selector: 'app-course-create',
    templateUrl: './course-create.component.html',
    styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
    id: number;
    model: ICourse;
    breadcrumbItems: IBreadcrumb[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private courcesService: CourcesService,
        private loadingService: LoadingService,
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
            this.getCourseById(this.id);
        } else {
            this.breadcrumbItems.push({title: 'New course'});
        }
    }

    save() {
        this.id ? this.updateCourse(this.model) : this.createCourse(this.model);
    }

    cancel() {
        this.router.navigate(['courses']);
    }

    private getCourseById(id: number) {
        this.courcesService.getCourseById(id).subscribe((res) => {
            this.model = res;
            this.loadingService.hideLoading();
        });
    }

    private createCourse(item: ICourse) {
        this.courcesService.createCourse(item).subscribe(() => {
            this.loadingService.hideLoading();
            this.router.navigate(['courses']);
        });
    }

    private updateCourse(item: ICourse) {
        this.courcesService.updateCourse(item).subscribe(() => {
            this.loadingService.hideLoading();
            this.router.navigate(['courses']);
        });
    }
}

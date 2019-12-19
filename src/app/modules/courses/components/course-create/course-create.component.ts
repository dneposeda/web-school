import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../../../interfaces/icourse';
import {CourcesService} from '../../services/cources.service';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';

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
        private service: CourcesService
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
            this.model = Object.assign(this.model, this.service.getItemById(this.id));
            this.breadcrumbItems.push({title: this.model.title});
        } else {
            this.breadcrumbItems.push({title: 'New course'});
        }
    }

    save() {
        this.id ? this.service.createCourse(this.model) : this.service.updateItem(this.model);
        this.router.navigate(['courses']);
    }

    cancel() {
        this.router.navigate(['courses']);
    }

}

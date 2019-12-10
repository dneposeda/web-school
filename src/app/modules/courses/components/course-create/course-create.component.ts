import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../../../interfaces/icourse';
import {CourcesService} from '../../services/cources.service';

@Component({
    selector: 'app-course-create',
    templateUrl: './course-create.component.html',
    styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
    id: number;
    model: ICourse;

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
        if (this.id) {
            this.model = Object.assign(this.model, this.service.getItemById(this.id))
        }
    }

    save() {
        console.log('save');
    }

    cancel() {
        this.router.navigate(['courses']);
    }

}

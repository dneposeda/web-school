import { Component, OnInit, Input } from '@angular/core';
import { faClock, faCalendarAlt, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from 'src/app/interfaces/icourse';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    public faClock = faClock;
    public faCalendarAlt = faCalendarAlt;
    faPen = faPen;
    faTrash = faTrash;

    @Input() course: ICourse;

    constructor() { }

    ngOnInit() {
    }

}

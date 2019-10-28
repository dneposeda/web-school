import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faClock, faCalendarAlt, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from 'src/app/interfaces/icourse';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    // Icons FontAwesome
    faClock = faClock;
    faCalendarAlt = faCalendarAlt;
    faPen = faPen;
    faTrash = faTrash;

    @Input() course: ICourse;
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    deleteCourse(): void {
        this.delete.emit(this.course.id);
    }

}

import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { faClock, faCalendarAlt, faPen, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from 'src/app/interfaces/icourse';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {

    // Icons FontAwesome
    faClock = faClock;
    faCalendarAlt = faCalendarAlt;
    faPen = faPen;
    faTrash = faTrash;
    faStar = faStar;

    @Input() course: ICourse;
    @Output() delete: EventEmitter<ICourse> = new EventEmitter<ICourse>();
    @Output() edit: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    deleteCourse(event: any): void {
        this.delete.emit(this.course);
    }
}

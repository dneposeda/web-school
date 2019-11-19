import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces/icourse';
import { FilterByPipe } from 'src/app/pipe/filter-by.pipe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CourcesService } from 'src/app/services/cources.service';


@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
    providers: [
        FilterByPipe,
    ]
})
export class CoursesListComponent implements OnInit {

    // Icons FontAwesome
    faPlus = faPlus;

    courses: Array<ICourse>;
    coursesList: Array<ICourse>;


    constructor( private filterBy: FilterByPipe, private courcesService: CourcesService) {}

    ngOnInit() {
        this.courses = this.courcesService.getList();
        this.coursesList = this.courses;
    }

    loadMoreCourses(): void {
        console.log('Load more course');
    }

    deleteCourse(id: any): void {
        const isDelete = confirm(`Are you sure you want to delete?\nId course - ${id}`);
        isDelete && this.courcesService.removeItem(id);
    }

    find(searchText: string){
        this.coursesList = this.filterBy.transform(this.courses, 'title', searchText)
    }

}

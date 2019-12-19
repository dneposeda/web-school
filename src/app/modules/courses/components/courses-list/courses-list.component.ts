import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces/icourse';
import { FilterByPipe } from 'src/app/modules/shared/pipe/filter-by.pipe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CourcesService } from 'src/app/modules/courses/services/cources.service';
import { Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';


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
    breadcrumbItems: IBreadcrumb[];

    coursesList: Array<ICourse>;

    private searchText: string;

    constructor( private filterBy: FilterByPipe, private courcesService: CourcesService, private router: Router) {}

    ngOnInit() {
        this.coursesList = this.courcesService.getList();
        this.breadcrumbItems = [
            {title: 'Courses'}
        ];
    }

    loadMoreCourses(event: any): void {
        console.log('Load more course');
    }

    deleteCourse(id: any): void {
        if (!confirm(`Are you sure you want to delete?\nId course - ${id}`)) { return; }
        this.courcesService.removeItem(id);
        this.find(this.searchText);
    }

    edit(id: number) {
        this.router.navigate(['/courses', id]);
    }

    find(searchText: string) {
        this.searchText = searchText;
        this.coursesList = this.courcesService.getList();
        if (searchText) {
            this.coursesList = this.filterBy.transform(this.coursesList, 'title', searchText);
        }
    }

    create() {
        this.router.navigate(['/courses/new']);
    }

}

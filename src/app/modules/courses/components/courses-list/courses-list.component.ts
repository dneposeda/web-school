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
    coursesList: ICourse[];

    private count = 4;
    private searchText: string;

    constructor( private filterBy: FilterByPipe, private courcesService: CourcesService, private router: Router) {}

    ngOnInit() {
        this.getCourses();
        this.breadcrumbItems = [
            {title: 'Courses'}
        ];
    }

    loadMoreCourses(): void {
        this.count += 4;
        this.getCourses();
    }

    getCourses() {
        this.courcesService
            .getList(this.count, this.searchText)
            .subscribe((res) => { this.coursesList = res; });
    }

    deleteCourse(id: number): void {
        if (!confirm(`Are you sure you want to delete?\nId course - ${id}`)) { return; }
        this.courcesService.removeCourse(id).subscribe(() => {
            this.getCourses();
        });
    }

    find(searchText: string) {
        this.searchText = searchText;
        this.getCourses();
    }

    create() {
        this.router.navigate(['/courses/new']);
    }

}

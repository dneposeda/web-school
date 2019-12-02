import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';

import { PageComponent } from './components/page/page.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { DurationPipe } from 'src/app/pipe/duration.pipe';
import { OrderByPipe } from 'src/app/pipe/order-by.pipe';
import { FilterByPipe } from 'src/app/pipe/filter-by.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        SearchComponent,
        CourseComponent,
        CoursesListComponent,
        PageComponent,
        HighlightDirective,
        DurationPipe,
        OrderByPipe,
        FilterByPipe,
    ],
    imports: [
        FormsModule,
        CommonModule,
        CoursesRoutingModule,
        FontAwesomeModule,
    ]
})
export class CoursesModule { }

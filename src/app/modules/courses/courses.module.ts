import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PageComponent } from './components/page/page.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';

import { HighlightDirective } from 'src/app/directives/highlight.directive';


@NgModule({
    declarations: [
        SearchComponent,
        CourseComponent,
        CoursesListComponent,
        PageComponent,
        HighlightDirective,
        CourseCreateComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        CoursesRoutingModule,
        FontAwesomeModule,
        SharedModule,
    ]
})
export class CoursesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PageComponent } from './components/page/page.component';
import { DurationPipe } from './pipe/duration.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderByPipe } from './pipe/order-by.pipe';
import { FilterByPipe } from './pipe/filter-by.pipe';
import { HighlightDirective } from './directives/highlight.directive';

const appRoutes: Routes = [
    { path: 'courses', component: CoursesListComponent },
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        FooterComponent,
        SearchComponent,
        CourseComponent,
        CoursesListComponent,
        BreadcrumbsComponent,
        UserInfoComponent,
        PageComponent,
        DurationPipe,
        OrderByPipe,
        NotFoundComponent,
        FilterByPipe,
        HighlightDirective,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // debugging purposes only
        ),
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

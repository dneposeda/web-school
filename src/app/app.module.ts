import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/modules/shared/pipe/duration.pipe';
import { OrderByPipe } from 'src/app/modules/shared/pipe/order-by.pipe';
import { FilterByPipe } from 'src/app/modules/shared/pipe/filter-by.pipe';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { UserNameComponent } from './components/user-info/user-name.component';
import { DurationFieldComponent } from './components/inputs/duration-field/duration-field.component';
import { DateFieldComponent } from './components/inputs/date-field/date-field.component';
import { AuthorFieldComponent } from './components/inputs/author-field/author-field.component';


@NgModule({
    declarations: [
        FooterComponent,
        NotFoundComponent,
        HeaderComponent,
        UserInfoComponent,
        LogoComponent,
        BreadcrumbsComponent,
        DurationFieldComponent,
        DurationPipe,
        OrderByPipe,
        FilterByPipe,
        LoadingComponent,
        UserNameComponent,
        DateFieldComponent,
        AuthorFieldComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        NotFoundComponent,
        FooterComponent,
        HeaderComponent,
        UserInfoComponent,
        BreadcrumbsComponent,
        DurationPipe,
        OrderByPipe,
        FilterByPipe,
        LoadingComponent,
        UserNameComponent,
        DurationFieldComponent,
        DateFieldComponent,
        AuthorFieldComponent,
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';



@NgModule({
    declarations: [
        FooterComponent,
        NotFoundComponent,
        HeaderComponent,
        UserInfoComponent,
        LogoComponent,
        BreadcrumbsComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        NotFoundComponent,
        FooterComponent,
        HeaderComponent,
        UserInfoComponent,
        BreadcrumbsComponent,
    ]
})
export class SharedModule { }

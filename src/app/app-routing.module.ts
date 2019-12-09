import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './modules/courses/components/page/page.component';
import { LoginPageComponent } from './modules/auth/components/login-page/login-page.component';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { CourseCreateComponent } from './modules/courses/components/course-create/course-create.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: PageComponent },
    { path: 'courses/new', component: CourseCreateComponent },
    { path: 'courses/:id', component: CourseCreateComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // debugging purposes only
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }

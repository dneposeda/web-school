import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './modules/courses/components/page/page.component';
import { LoginPageComponent } from './modules/auth/components/login-page/login-page.component';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: PageComponent },
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

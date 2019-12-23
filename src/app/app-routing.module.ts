import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

const appRoutes: Routes = [
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

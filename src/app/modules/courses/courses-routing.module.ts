import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: 'courses', component: PageComponent, canActivate: [AuthGuard] },
    { path: 'courses/new', component: CourseCreateComponent, canActivate: [AuthGuard] },
    { path: 'courses/:id', component: CourseCreateComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }

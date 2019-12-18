import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBreadcrumb } from 'src/app/interfaces/ibreadcrumb';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
    @Input() items: IBreadcrumb[];

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { SearchComponent } from '../search/search.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from '../course/course.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/pipe/duration.pipe';

describe('CoursesListComponent', () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CoursesListComponent,
                SearchComponent,
                FaIconComponent,
                CourseComponent,
                DurationPipe,
            ],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

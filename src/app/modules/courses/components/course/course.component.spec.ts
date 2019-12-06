import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from 'src/app/modules/shared/pipe/duration.pipe';

describe('CourseComponent', () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseComponent,
                FaIconComponent,
                DurationPipe,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

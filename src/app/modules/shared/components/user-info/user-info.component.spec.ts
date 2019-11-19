import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('UserInfoComponent', () => {
    let component: UserInfoComponent;
    let fixture: ComponentFixture<UserInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserInfoComponent,
                FaIconComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorFieldComponent } from './author-field.component';

describe('AuthorFieldComponent', () => {
    let component: AuthorFieldComponent;
    let fixture: ComponentFixture<AuthorFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorFieldComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

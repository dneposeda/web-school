import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { LogoComponent } from './modules/shared/components/logo/logo.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';


describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                BreadcrumbsComponent,
                PageComponent,
                FooterComponent,
                LogoComponent,
                UserInfoComponent,
                FaIconComponent,
            ],
            imports: [
                RouterModule.forRoot([]),
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    // it(`should have as title 'web-school'`, () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('web-school');
    // });

    // it('should render title', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('.content span').textContent).toContain('web-school app is running!');
    // });
});

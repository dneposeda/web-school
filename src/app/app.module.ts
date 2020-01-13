import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { SharedModule } from './modules/shared/shared.module';

import { httpInterceptorProviders } from './core/interceptors';
import { environment } from '../environments/environment';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AuthModule,
        CoursesModule,
        SharedModule,
        RootStoreModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        ReactiveFormsModule,
        AppRoutingModule, // Рутовый роутинг после всех модулей
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }

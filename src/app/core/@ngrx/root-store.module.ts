import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoursesStoreModule } from './courses/courses-store.module';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({}, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
            }
        }),
        EffectsModule.forRoot([]),
        CoursesStoreModule,
    ]
})
export class RootStoreModule { }

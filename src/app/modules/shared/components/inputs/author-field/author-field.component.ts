import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IAuthor } from 'src/app/modules/courses/services/author.service';

const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorFieldComponent),
    multi: true
};

const CUSTOM_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AuthorFieldComponent),
    multi: true
};
export interface AuthorFieldFormValues {
    authors: string;
}

@Component({
    selector: 'app-author-field',
    templateUrl: './author-field.component.html',
    styleUrls: ['./author-field.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [CUSTOM_VALUE_ACCESSOR, CUSTOM_NG_VALIDATORS],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorFieldComponent implements OnDestroy, ControlValueAccessor {
    @Input() public readonly label: string;
    @Input() public readonly placeholder: string;
    @Input() authors$: Observable<IAuthor[]>;

    form: FormGroup;
    subscriptions: Subscription[] = [];
    selectedAuthor: IAuthor[];

    get value(): AuthorFieldFormValues {
        return this.form.value;
    }

    set value(value: AuthorFieldFormValues) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get authorControl() {
        return this.form.controls.authors;
    }

    constructor( private fb: FormBuilder) {
        this.form = this.fb.group({
            authors: ['', Validators.required]
        });

        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
                this.onChange(value);
                this.onTouched();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    onChange: any = () => { };
    onTouched: any = () => { };

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    writeValue(value: any): void {
        if (value) {
            this.value = value;
        }

        if (value === null) {
            this.form.reset();
        }
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { authors: { valid: false, }, };
    }

}

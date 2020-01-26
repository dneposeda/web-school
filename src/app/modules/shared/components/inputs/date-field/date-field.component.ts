import { Component, Input, forwardRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateFieldComponent),
    multi: true
};

const CUSTOM_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateFieldComponent),
    multi: true
};

export interface DateFieldFormValues {
    creationDate: string;
}

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.css'],
    providers: [CUSTOM_VALUE_ACCESSOR, CUSTOM_NG_VALIDATORS ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateFieldComponent implements OnDestroy, ControlValueAccessor {
    @Input() readonly label: string;
    @Input() readonly placeholder: string;

    form: FormGroup;
    subscriptions: Subscription[] = [];

    get value(): DateFieldFormValues {
        return this.form.value;
    }

    set value(value: DateFieldFormValues
        ) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get dateFieldControl() {
        return this.form.controls.creationDate;
    }

    constructor( private fb: FormBuilder) {
        this.form = this.fb.group({
            creationDate: ['', Validators.required]
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
        return this.form.valid ? null : { creationDate: { valid: false, }, };
    }
}

import { Component, Input, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CustomValidators } from './../../../validators';

const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationFieldComponent),
    multi: true
};

const CUSTOM_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationFieldComponent),
    multi: true
};
export interface DurationFormValues {
    duration: string;
}

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.css'],
    providers: [CUSTOM_VALUE_ACCESSOR, CUSTOM_NG_VALIDATORS],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DurationFieldComponent implements OnDestroy, ControlValueAccessor {
    @Input() readonly label: string;
    @Input() readonly placeholder: string;

    form: FormGroup;
    subscriptions: Subscription[] = [];

    get value(): DurationFormValues {
        return this.form.value;
    }

    set value(value: DurationFormValues) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get durationControl() {
        return this.form.controls.duration;
    }

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            duration: ['', [Validators.required, CustomValidators.positiveNumber]],
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
        return this.form.valid ? null : { duration: { valid: false, }, };
    }
}

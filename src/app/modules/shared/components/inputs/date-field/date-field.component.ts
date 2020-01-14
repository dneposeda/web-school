import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true
        }
    ]
})
export class DateFieldComponent implements OnInit, ControlValueAccessor {

    @Input() readonly label: string;
    @Input() readonly placeholder: string;

    form: FormGroup;

    constructor( private fb: FormBuilder) {
        this.form = this.fb.group({
            creationDate: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(value) {
        if (value) {
            this.value = value;
        }

        if (value === null) {
            this.form.reset();
        }
    }

    get value() {
        return this.form.value;
    }

    set value(value) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    onChange: any = () => {};
    onTouched: any = () => {};

}

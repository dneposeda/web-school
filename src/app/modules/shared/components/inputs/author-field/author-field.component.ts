import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-author-field',
    templateUrl: './author-field.component.html',
    styleUrls: ['./author-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorFieldComponent),
            multi: true
        }
    ]
})
export class AuthorFieldComponent implements OnInit, ControlValueAccessor {

    @Input() public readonly label: string;
    @Input() public readonly placeholder: string;

    form: FormGroup;

    constructor( private fb: FormBuilder) {
        this.form = this.fb.group({
            authors: ['', Validators.required]
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

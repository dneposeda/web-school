import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DurationFieldComponent),
            multi: true
        }
    ]
})
export class DurationFieldComponent implements OnInit, ControlValueAccessor {
    @Input() readonly label: string;
    @Input() readonly placeholder: string;

    @Input('value') _value;

    onChange: any = () => { };
    onTouched: any = () => { };

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    constructor() { }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    // form: FormGroup;

    // constructor( private fb: FormBuilder) {
    //     this.form = this.fb.group({
    //         duration: ['', Validators.required]
    //     });
    // }

    ngOnInit() {
    }

    // registerOnChange(fn) {
    //     this.onChange = fn;
    // }

    // registerOnTouched(fn) {
    //     this.onTouched = fn;
    // }

    // writeValue(val) {
    //     if (val) {
    //         this.value = val;
    //     }
    // }

    // get value() {
    //     return this.value;
    // }

    // set value(val) {
    //     this.value = val;
    //     this.onChange(val);
    //     this.onTouched();
    // }

    // onChange: any = () => {};
    // onTouched: any = () => {};

}

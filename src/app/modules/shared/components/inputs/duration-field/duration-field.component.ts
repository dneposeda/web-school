import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationFieldComponent),
    multi: true
};

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.css'],
    providers: [ CUSTOM_VALUE_ACCESSOR, ]
})
export class DurationFieldComponent implements OnInit, ControlValueAccessor {
    @Input() readonly label: string;
    @Input() readonly placeholder: string;

    @Input('value') _value;

    onChange: any = (_: any) => { };
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

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(value: any): void {
        if (value) {
            this.value = value;
        }
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

import { Component, OnInit, Input, forwardRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import {AuthorService, IAuthor} from 'src/app/modules/courses/services/author.service';

const CUSTOM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorFieldComponent),
    multi: true
};

@Component({
    selector: 'app-author-field',
    templateUrl: './author-field.component.html',
    styleUrls: ['./author-field.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [CUSTOM_VALUE_ACCESSOR],
})
export class AuthorFieldComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() public label: string;

    @Input() public placeholder: string;

    @Input() public isInvalid: boolean;

    authors$: Observable<IAuthor[]>;

    subscriptions: Subscription[] = [];
    selectedAuthor: IAuthor[];

    private _value: IAuthor[];
    get value(): IAuthor[] {
        return this._value;
    }
    set value(value: IAuthor[]) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    constructor(
        private fb: FormBuilder,
        private authorService: AuthorService,
    ) {
        /*
        Это даже гипотетичски не может тут находится.
        Это должно быть в OnInit, иначе сработать может до ngOnInit()
        И по осторожнее с valueChanges. Он будет срабатывать от любого программного изменения.
        А на практике ВСЕГДА нужно реагировать только на интерактивные изменения.

        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
                this.onChange(value);
                this.onTouched();
            })
        );
         */
    }

    ngOnInit(): void {
        this.authors$ = this.authorService.getList();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    /**
     * Произошло интерактивное изменение контрола
     */
    changed() {
        this.value = this.selectedAuthor && this.selectedAuthor.length ? this.selectedAuthor : null;
        console.log('changed', this._value);
    }

    onChange: any = () => { };
    onTouched: any = () => { };

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    writeValue(value: any): void {
        this._value = Array.isArray(value) ? value : null;
        this.selectedAuthor = this._value ? this._value.slice(0) : [];
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

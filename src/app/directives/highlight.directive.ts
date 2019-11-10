import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    private currentDate = +new Date().setHours(0, 0, 0, 0);
    private DAY = 3600 * 24 * 1000;
    private fresh: boolean;
    private upcoming: boolean;

    @Input('appHighlight') creationDate: any;

    constructor(
        private elementRef: ElementRef,
        private render: Renderer2 ) {}

    ngOnInit() {
        this.creationDate = Date.parse(this.creationDate);
        this.fresh = this.creationDate < this.currentDate
                    && this.creationDate >= (this.currentDate - this.DAY * 14);
        this.upcoming = this.creationDate > this.currentDate;

        if (this.fresh) {
            this.render.addClass(this.elementRef.nativeElement, 'fresh')
        } else if (this.upcoming) {
            this.render.addClass(this.elementRef.nativeElement, 'upcoming')
        }
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(items: any[], fieldName: any, ...args: any[]): any {
        if (!Array.isArray(items)) {
            return items;
        }

        if (fieldName) {
            items = items.slice(0);
            items.sort((a: any, b: any) => {
                return this.sort(a, b, fieldName);
            });
        }

        return items;
    }

    private sort(a: any, b: any, fieldName: string): number {
        const prevItem: number = Date.parse(a[fieldName]);
        const nextItem: number = Date.parse(b[fieldName]);

        if (prevItem > nextItem) return -1;
        if (prevItem === nextItem) return 0;
        if (prevItem < nextItem) return 1;
    }
}

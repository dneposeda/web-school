import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

    transform(items: any[], fieldName: string, search: string, ...args: any[]): any {
        if (!Array.isArray(items)) {
            return items;
        }

        if (fieldName) {
            items = items.filter(item => {
                return item[fieldName].toLowerCase().includes(search);
            });
        }
        return items;
    }



}

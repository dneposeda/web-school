import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        const hours: number = (value / 60);
        const rHours = Math.floor(hours);
        const minutes = (hours - rHours) * 60;
        const rMinutes = Math.round(minutes);

        let rStringHours = rHours > 0 ? `${rHours} h ` : ''
        let rStringMin = rMinutes > 0 ? `${rMinutes} min` : ''

        return rStringHours + rStringMin

    }
}

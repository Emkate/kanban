import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'background'
})
export class BackgroundPipe implements PipeTransform {
  transform(value: string): { [key: string]: string } {
    if (value.includes('url(')) {
      return {
        'background-image': value,
        'background-size': 'cover',
        'background-position': 'center'
      };
    }

    return {
      background: value
    };
  }
}

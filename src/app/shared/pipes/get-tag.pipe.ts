import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../interfaces/tag.interface';
import { tags } from '../data.mock';

@Pipe({
  name: 'getTag'
})
export class GetTagPipe implements PipeTransform {
  transform(value: number): Tag | undefined {
    return tags.find(el => el.id === value);
  }
}

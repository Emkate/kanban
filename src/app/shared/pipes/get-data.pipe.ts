import { Pipe, PipeTransform } from '@angular/core';
import { tags, tasks } from '../data.mock';
import { Tag } from '../interfaces/tag.interface';
import { Task } from '../interfaces/task.interface';

@Pipe({
  name: 'getData'
})
export class GetDataPipe implements PipeTransform {

  transform(value: number, entityName: string): Tag | Task | undefined {
    switch (entityName) {
      case 'tag':
        return tags.find(el => el.id === value) as Tag;
      case 'task':
      default:
        return tasks.find(el => el.id === value) as Task;
    }
  }

}

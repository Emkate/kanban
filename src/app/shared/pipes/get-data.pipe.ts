import { Pipe, PipeTransform } from '@angular/core';
import { tags, tasks, users } from '../data.mock';
import { Tag } from '../interfaces/tag.interface';
import { Task } from '../interfaces/task.interface';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'getData'
})
export class GetDataPipe implements PipeTransform {

  transform(value: number, entityName: string): User | Tag | Task | undefined {
    switch (entityName) {
      case 'user':
        return users.find(el => el.id === value) as User;
      case 'tag':
        return tags.find(el => el.id === value) as Tag;
      case 'task':
        return tasks.find(el => el.id === value) as Task;
    }

    return;
  }

}

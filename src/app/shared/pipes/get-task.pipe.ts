import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { tasks } from '../data.mock';

@Pipe({
  name: 'getTask'
})
export class GetTaskPipe implements PipeTransform {
  transform(value: number): Task | undefined {
    return tasks.find(el => el.id === value);
  }
}

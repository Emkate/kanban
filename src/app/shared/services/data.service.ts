import { Injectable } from '@angular/core';
import { tasks, tags, columns } from '../data.mock';
import { ColumnItem } from '../interfaces/column-item.interface';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  isDataStored = !!localStorage.getItem('data');

  constructor() {
    console.log('data service initiated');
    if (!this.isDataStored) {
      const data = {
        tasks, tags, columns
      };

      this.data = data;

      localStorage.setItem('data', JSON.stringify(data));
    } else {
      this.data = JSON.parse(localStorage.getItem('data') || '{}');
    }

  }

  getTasks(): Task[] {
    return this.isDataStored ? this.data.tasks : tasks;
  }

  addColumn(name: string, projectId: number): ColumnItem {
    const biggestId = [...this.data.columns].sort((first, second) => {
      return first.id > second.id ? 1 : -1;
    })[0].id;

    const columnItem = {
      id: biggestId + 1,
      name,
      projectId,
      tasks: [],
    };

    this.data.columns.push(columnItem);

    localStorage.setItem('data', JSON.stringify(this.data));

    return columnItem;
  }

  addTask(description: string, columnId: number): Task {
    const biggestId = [...this.data.tasks].sort((first, second) => {
      return first.id > second.id ? 1 : -1;
    })[0].id;

    const taskItem = {
      id: biggestId + 1,
      description,
      columnId,
      tagsIds: [],
      usersIds: [],
      attachmentsIds: [],
    };

    this.data.tasks.push(taskItem);

    localStorage.setItem('data', JSON.stringify(this.data));

    return taskItem;
  }
}

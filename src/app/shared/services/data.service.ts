import { Injectable } from '@angular/core';
import { tasks, tags, columns } from '../data.mock';
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

      localStorage.setItem('data', JSON.stringify(data));
    }

  }

  getTasks(): Task[] {
    return this.isDataStored ? this.data.tasks : tasks;
  }
}

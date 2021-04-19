import { Task } from './task.interface';

export interface ColumnItem {
  id: number;
  name: string;
  tasks: Task[];
  projectId: number;
}

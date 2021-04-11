import { Task } from './interfaces/task.interface';
import { ColumnItem } from './interfaces/column-item.interface';

export const tasks: Task[] = [
  {
    id: 1,
    tags: ['writer'],
    description: 'Copywriting review for all paragraphs in app',
    usersIds: [],
    attachmentsIds: [],
    columnId: 1,
  },
  {
    id: 2,
    tags: [],
    description: 'Prepare grid system design',
    usersIds: [],
    attachmentsIds: [],
    columnId: 1,
  },
  {
    id: 3,
    tags: [],
    description: 'Setup repository',
    usersIds: [],
    attachmentsIds: [],
    columnId: 2,
  },
];

export const columns: ColumnItem[] = [
  {
    id: 1,
    name: 'To do',
    tasks: tasks.filter(task => task.columnId === 1)
  },
  {
    id: 2,
    name: 'In progress',
    tasks: tasks.filter(task => task.columnId === 2)
  }
];

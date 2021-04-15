import { Task } from './interfaces/task.interface';
import { ColumnItem } from './interfaces/column-item.interface';
import { Tag } from './interfaces/tag.interface';
import { User } from './interfaces/user.interface';

export const tasks: Task[] = [
  {
    id: 1,
    tagsIds: [1],
    description: 'Copywriting review for all paragraphs in app',
    usersIds: [1, 2],
    attachmentsIds: [],
    columnId: 1,
  },
  {
    id: 2,
    tagsIds: [],
    description: 'Prepare grid system design',
    usersIds: [3],
    attachmentsIds: [],
    columnId: 1,
  },
  {
    id: 3,
    tagsIds: [],
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

export const tags: Tag[] = [
  { id: 1, name: 'design', color: '#8a53ff' },
  { id: 2, name: 'seo', color: '#ff9595' },
  { id: 3, name: 'mobile app', color: '#1cbe81' }
];

export const users: User[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', thumb: 'assets/img/user1.jpg'},
  { id: 2, firstName: 'Norm', lastName: 'Johnson', thumb: 'assets/img/user2.jpg'},
  { id: 3, firstName: 'David', lastName: 'Salieri', thumb: 'assets/img/user3.jpg'},
];

import { Task } from './interfaces/task.interface';
import { ColumnItem } from './interfaces/column-item.interface';
import { Tag } from './interfaces/tag.interface';
import { User } from './interfaces/user.interface';
import { Project } from './interfaces/project.interface';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Kanban app',
    status: 'In progress',
    background: 'linear-gradient(131deg, rgba(255,228,228,1) 33%, rgba(192,211,255,1) 33%, rgba(192,211,255,1) 66%, rgba(198,236,198,1) 66%)'
  },
  {
    id: 2,
    name: 'Interview questions app',
    status: 'In progress',
    background: 'linear-gradient(90deg, rgba(247,227,255,1) 33%, rgba(237,255,237,1) 33%, rgba(237,255,237,1) 66%, rgba(200,255,248,1) 66%)'
  },
  {
    id: 3,
    name: 'Portfolio page',
    status: 'In progress',
    background: 'linear-gradient(45deg, rgba(255,253,210,1) 33%, rgba(255,241,237,1) 33%, rgba(255,241,237,1) 66%, rgba(255,238,208,1) 66%)'
  }
];

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
  },
  {
    id: 3,
    name: 'In review',
    tasks: tasks.filter(task => task.columnId === 3)
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

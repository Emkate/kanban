export interface Task {
  id: number;
  tags: string[];
  description: string;
  usersIds: number[];
  attachmentsIds: number[];
  columnId: number;
}

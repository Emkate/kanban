export interface Task {
  id: number;
  tagsIds: number[];
  description: string;
  usersIds: number[];
  attachmentsIds: number[];
  columnId: number;
}

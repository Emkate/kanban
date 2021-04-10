import { Component, OnInit } from '@angular/core';
import { Task } from '../task-item/task.interface';

@Component({
  selector: 'app-column-item',
  templateUrl: './column-item.component.html',
  styleUrls: ['./column-item.component.scss']
})
export class ColumnItemComponent implements OnInit {
  items: Task[] = [
    {
      tags: [],
      description: 'Copywriting review for all paragraphs in app',
      usersIds: [],
      attachmentsIds: []
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

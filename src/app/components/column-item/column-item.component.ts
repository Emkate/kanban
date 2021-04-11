import { Component, Input, OnInit } from '@angular/core';
import { ColumnItem } from 'src/app/shared/interfaces/column-item.interface';
import { Task } from '../../shared/interfaces/task.interface';

@Component({
  selector: 'app-column-item',
  templateUrl: './column-item.component.html',
  styleUrls: ['./column-item.component.scss']
})
export class ColumnItemComponent implements OnInit {
  @Input() data?: ColumnItem;

  constructor() { }

  ngOnInit(): void {
  }

  handleDragTask(event: Event): void {
    event.preventDefault();
  }

  handleDropTask(event: Event): void {
    console.log(event);
  }
}

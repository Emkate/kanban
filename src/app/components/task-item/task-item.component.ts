import { Component, Input, OnInit } from '@angular/core';
import { DragService } from 'src/app/shared/drag.service';
import { Task } from '../../shared/interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() taskData: Task = {} as Task;

  constructor(
    private dragService: DragService
  ) { }

  ngOnInit(): void {
  }

  handleDragStart(event: DragEvent): void {
    if (this.taskData) {
      this.dragService.draggedTaskId$.next(this.taskData.id);
    }
  }
}

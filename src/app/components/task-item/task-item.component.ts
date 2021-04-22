import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { enterAnimation, leaveAnimation } from 'src/app/shared/animations';
import { tags } from 'src/app/shared/data.mock';
import { Tag } from 'src/app/shared/interfaces/tag.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { DragService } from 'src/app/shared/services/drag.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Task } from '../../shared/interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', useAnimation(enterAnimation)),
        transition(':leave', useAnimation(leaveAnimation))
      ]
    )
  ],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() taskData: Task | undefined;
  tagsMenuPosition: [number, number] = [0, 0];
  optionsMenuPosition: [number, number] = [0, 0];
  tags: Tag[] = tags;

  constructor(
    private dragService: DragService,
    private sharedService: SharedService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.sharedService.backdropVisible$.pipe(
      filter(visible => !visible),
      tap(() => this.tagsMenuPosition = [0, 0]),
      tap(() => this.optionsMenuPosition = [0, 0]),
    ).subscribe();
  }

  handleDragStart(event: DragEvent): void {
    if (this.taskData) {
      this.dragService.draggedTaskId$.next(this.taskData.id);
    }
  }

  handleDragEnd(event: DragEvent): void {
    this.dragService.draggedTaskId$.next(0);
    this.dragService.dragovererdColumnId$.next(0);
  }

  openMenu(event: MouseEvent, menu: 'tags' | 'options'): void {
    const button = this.getButtonElement(event.target as HTMLElement);
    const buttonPosition = button?.getBoundingClientRect();

    if (!button || !buttonPosition) {
      return;
    }

    this.getMenuPosition(menu, buttonPosition);
    this.sharedService.backdropVisible$.next(true);
  }

  getMenuPosition(menu: 'tags' | 'options', pos: DOMRect): void {
    switch (menu) {
      case 'tags':
        this.tagsMenuPosition = [pos.left, pos.top];
        break;
      case 'options':
        this.optionsMenuPosition = [window.innerWidth - pos.right, pos.top];
        break;
      default:
        break;
    }
  }

  closeMenu(): void {
    this.sharedService.backdropVisible$.next(false);
  }

  getButtonElement(elem: HTMLElement): HTMLElement | null {
    if (elem && elem.nodeName !== 'BUTTON' && elem.parentElement) {
      return this.getButtonElement(elem.parentElement);
    }

    return elem.nodeName === 'BUTTON' ? elem : null;
  }

  selectTagItem(tag: Tag): void {
    if (!this.taskData) {
      return;
    }

    const isTaskPresent = this.taskData?.tagsIds.includes(tag.id);

    if (isTaskPresent) {
      this.taskData.tagsIds = this.taskData?.tagsIds.filter(id => id !== tag.id);
    } else {
      this.taskData?.tagsIds.push(tag.id);
    }
  }
}

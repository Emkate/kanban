import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { enterAnimation, leaveAnimation } from 'src/app/shared/animations';
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

  constructor(
    private dragService: DragService,
    private sharedService: SharedService,
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

    console.log(button);
    console.log(buttonPosition);

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
}

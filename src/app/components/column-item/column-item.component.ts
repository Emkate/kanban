import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map, switchMap, tap, throttleTime, withLatestFrom } from 'rxjs/operators';
import { DragService } from 'src/app/shared/services/drag.service';
import { ColumnItem } from 'src/app/shared/interfaces/column-item.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-column-item',
  templateUrl: './column-item.component.html',
  styleUrls: ['./column-item.component.scss']
})
export class ColumnItemComponent implements OnInit, AfterViewInit {
  @ViewChild('columnContent') columnContent?: ElementRef;
  @Input() data?: ColumnItem;
  addTaskModalOpened = false;
  addTaskForm: FormGroup = new FormGroup({});

  constructor(
    public dragService: DragService,
    private dataService: DataService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const dragoverEvent$ = fromEvent(this.columnContent?.nativeElement, 'dragover');

    dragoverEvent$.pipe(
      switchMap(() => this.dragService.draggedTaskId$),
      withLatestFrom(dragoverEvent$),
      filter(([taskId, dragEvent]: [number, any]) => {
        return !!taskId && !this.data?.tasks.find(({ id }) => id === taskId);
      }),
      tap(([taskId, dragEvent]) => console.log('dragged task id: ', Number(taskId))),
      tap(() => console.log('column id: ', Number(this.data?.id))),
      throttleTime(300),
      tap(() => this.dragService.dragovererdColumnId$.next(Number(this.data?.id))),
      map(([taskId, dragEvent]: [number, any]) => {
        const column = dragEvent.path.find((el: HTMLElement) => el.className.includes('column-item__content'));
        const sidebarWidth = (document.getElementsByClassName('sidebar')[0] as HTMLElement).offsetWidth;
        const columnPos = [column.offsetLeft + sidebarWidth, column.offsetTop];
        const dragPosition = [dragEvent.x - columnPos[0], dragEvent.y - columnPos[1]];
      }),
    ).subscribe();

    fromEvent(this.columnContent?.nativeElement, 'drop').pipe(

    ).subscribe(this.handleDropTask);

    fromEvent(this.columnContent?.nativeElement, 'dragexit').subscribe(() => {
      this.dragService.dragovererdColumnId$.next(0);
    });
  }

  handleDropTask(event: any): void {
    this.dragService.dragovererdColumnId$.next(0);
  }

  openTaskModal(): void {
    this.addTaskModalOpened = true;
    this.initAddingTaskForm();
  }

  closeTaskModal(): void {
    this.addTaskModalOpened = false;
  }

  initAddingTaskForm(): void {
    this.addTaskForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
    });
  }

  saveTaskModal(): void {
    this.dataService.addTask(this.addTaskForm.controls.description.value, Number(this.data?.id));
    this.closeTaskModal();
    this.sharedService.backdropVisible$.next(false);
  }
}

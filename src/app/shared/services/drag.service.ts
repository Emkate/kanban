import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  draggedTaskId$: BehaviorSubject<number> = new BehaviorSubject(0);
  dragovererdColumnId$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
}

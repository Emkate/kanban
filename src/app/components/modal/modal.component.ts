import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { modalEnterAnimation, modalLeaveAnimation } from 'src/app/shared/animations';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-modal',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', useAnimation(modalEnterAnimation)),
        transition(':leave', useAnimation(modalLeaveAnimation))
      ]
    )
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges, OnInit {
  @Input() modalOpened = false;
  @Input() title = '';
  @Output() modalClosed: EventEmitter<void> = new EventEmitter();
  @Output() modalSave: EventEmitter<void> = new EventEmitter();

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.modalOpened.currentValue) {
      this.sharedService.backdropVisible$.next(true);
    }
  }

  ngOnInit(): void {
    this.sharedService.backdropVisible$.pipe(
      filter(visible => !visible),
      tap(() => this.modalClosed.emit())
    ).subscribe();
  }

  closeModal(): void {
    this.sharedService.backdropVisible$.next(false);
  }

  saveModal(): void {
    this.modalSave.emit();
  }
}

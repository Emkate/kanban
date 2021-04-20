import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { enterAnimation, leaveAnimation } from 'src/app/shared/animations';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-backdrop',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', useAnimation(enterAnimation)),
        transition(':leave', useAnimation(leaveAnimation))
      ]
    )
  ],
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  closeBackdrop(): void {
    this.sharedService.backdropVisible$.next(false);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from './button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: ButtonType = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}

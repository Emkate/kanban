import { Component, Input, OnInit } from '@angular/core';
import { ButtonIcon } from './button-icon.type';
import { ButtonType } from './button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: ButtonType = 'default';
  @Input() icon: ButtonIcon = 'add';

  constructor() { }

  ngOnInit(): void {
  }

}

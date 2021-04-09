import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() selectedItem = '';
  @Output() changeSidebarState: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectSidebarItem(itemName: string): void {
    if (itemName === this.selectedItem) {
      this.changeSidebarState.emit('');
      return;
    }

    this.changeSidebarState.emit(itemName);
  }
}

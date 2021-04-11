import { Component, OnInit } from '@angular/core';
import { columns } from 'src/app/shared/data.mock';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  columnItems = columns;
  selectedNavbarItem = '';

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedNavbarState(navbarState: string): void {
    this.selectedNavbarItem = navbarState;
  }
}

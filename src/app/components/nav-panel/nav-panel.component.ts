import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {
  @Input() projectData?: Project;

  constructor() { }

  ngOnInit(): void {
  }

}

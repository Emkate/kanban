import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() data?: Project;

  constructor() { }

  ngOnInit(): void {
  }
}

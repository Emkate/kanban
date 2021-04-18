import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/shared/data.mock';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

}

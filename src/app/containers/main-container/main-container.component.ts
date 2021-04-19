import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { columns, projects } from 'src/app/shared/data.mock';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  data?: Project;
  projectId?: number;
  columnItems = columns;
  selectedNavbarItem = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.pipe(
      tap(params => {
        this.projectId = Number(params.id);
        this.data = projects.find(proj => proj.id === this.projectId);
        this.columnItems = columns.filter(col => col.projectId === this.projectId);
      }),
    ).subscribe();
  }

  ngOnInit(): void {
  }

  setSelectedNavbarState(navbarState: string): void {
    this.selectedNavbarItem = navbarState;
  }
}

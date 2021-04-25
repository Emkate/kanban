import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { columns, projects } from 'src/app/shared/data.mock';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { SharedService } from 'src/app/shared/services/shared.service';

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
  addColumnModalOpened = false;
  addColumnForm: FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private sharedService: SharedService
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

  openColumnModal(): void {
    this.addColumnModalOpened = true;
    this.initAddingColumnForm();
  }

  closeColumnModal(): void {
    this.addColumnModalOpened = false;
  }

  initAddingColumnForm(): void {
    this.addColumnForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  saveColumnModal(): void {
    this.dataService.addColumn(this.addColumnForm.controls.name.value, Number(this.projectId));
    this.closeColumnModal();
    this.sharedService.backdropVisible$.next(false);
  }
}

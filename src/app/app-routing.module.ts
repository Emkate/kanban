import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContainerComponent } from './containers/main-container/main-container.component';
import { ProjectsContainerComponent } from './containers/projects-container/projects-container.component';

const routes: Routes = [
  { path: '', component: ProjectsContainerComponent },
  { path: 'project/:id', component: MainContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

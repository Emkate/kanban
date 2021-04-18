import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule, AddModule, OverflowMenuHorizontalModule, ArrowLeftModule } from '@carbon/icons-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ColumnItemComponent } from './components/column-item/column-item.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ButtonComponent } from './components/button/button.component';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { GetUserPipe } from './shared/pipes/get-user.pipe';
import { GetTagPipe } from './shared/pipes/get-tag.pipe';
import { GetTaskPipe } from './shared/pipes/get-task.pipe';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { ProjectsContainerComponent } from './containers/projects-container/projects-container.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarComponent,
    FiltersComponent,
    ColumnItemComponent,
    TaskItemComponent,
    ButtonComponent,
    GetUserPipe,
    GetTagPipe,
    GetTaskPipe,
    TagItemComponent,
    UserItemComponent,
    NavPanelComponent,
    ProjectsContainerComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    AddModule,
    ArrowLeftModule,
    OverflowMenuHorizontalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

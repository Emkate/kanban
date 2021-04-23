import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule, AddModule, OverflowMenuHorizontalModule, ArrowLeftModule, EventsModule, ListCheckedModule, SettingsModule } from '@carbon/icons-angular';

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
import { BackgroundPipe } from './shared/pipes/background.pipe';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { SharedService } from './shared/services/shared.service';
import { DataService } from './shared/services/data.service';
import { DragService } from './shared/services/drag.service';
import { ModalComponent } from './components/modal/modal.component';

const iconsModules = [
  GridModule,
  AddModule,
  ArrowLeftModule,
  OverflowMenuHorizontalModule,
  EventsModule,
  ListCheckedModule,
  SettingsModule
];

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
    BackgroundPipe,
    TagItemComponent,
    UserItemComponent,
    NavPanelComponent,
    ProjectsContainerComponent,
    ProjectItemComponent,
    BackdropComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...iconsModules
  ],
  providers: [
    DataService,
    DragService,
    SharedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

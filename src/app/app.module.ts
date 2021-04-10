import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule, AddModule, OverflowMenuHorizontalModule } from '@carbon/icons-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ColumnItemComponent } from './components/column-item/column-item.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarComponent,
    FiltersComponent,
    ColumnItemComponent,
    TaskItemComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    AddModule,
    OverflowMenuHorizontalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

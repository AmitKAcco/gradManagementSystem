import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCalendarRoutingModule } from './project-calendar-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProjectCalendarRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProjectCalendarModule { }

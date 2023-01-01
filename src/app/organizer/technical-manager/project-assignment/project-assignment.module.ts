import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectAssignmentRoutingModule } from './project-assignment-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProjectAssignmentRoutingModule
  ]
})
export class ProjectAssignmentModule { }

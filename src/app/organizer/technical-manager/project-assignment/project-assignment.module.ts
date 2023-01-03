import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectAssignmentRoutingModule } from './project-assignment-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import  { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProjectAssignmentRoutingModule,
    RouterModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class ProjectAssignmentModule { }

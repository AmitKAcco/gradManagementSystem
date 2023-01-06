import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleInterviewRoutingModule } from './schedule-interview-routing.module';
import { HomeComponent } from './home/home.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { ViewInterviewComponent } from './view-interview/view-interview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent,
    AddInterviewComponent,
    ViewInterviewComponent
  ],
  imports: [
    CommonModule,
    ScheduleInterviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    WidgetsModule
  ]
})
export class ScheduleInterviewModule { }

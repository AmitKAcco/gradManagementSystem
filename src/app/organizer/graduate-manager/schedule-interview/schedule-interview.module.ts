import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleInterviewRoutingModule } from './schedule-interview-routing.module';
import { HomeComponent } from './home/home.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { ViewInterviewComponent } from './view-interview/view-interview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ]
})
export class ScheduleInterviewModule { }

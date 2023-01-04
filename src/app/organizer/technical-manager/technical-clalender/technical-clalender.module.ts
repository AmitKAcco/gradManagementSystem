import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalClalenderRoutingModule } from './technical-clalender-routing.module';
import { HomeComponent } from './home/home.component';
import { AddCalendarComponent } from './add-calendar/add-calendar.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    HomeComponent,
    AddCalendarComponent,
    ViewCalendarComponent
  ],
  imports: [
    CommonModule,
    TechnicalClalenderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    WidgetsModule
  ]
})
export class TechnicalClalenderModule { }

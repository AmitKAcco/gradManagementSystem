import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarViewRoutingModule } from './calendar-view-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CalendarViewRoutingModule
  ]
})
export class CalendarViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarViewRoutingModule } from './calendar-view-routing.module';
import { HomeComponent } from './home/home.component';
import { CalendarViewComponent } from 'src/app/shared/calendar-view/calendar-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    CalendarViewComponent
  ],
  imports: [
    CommonModule,
    CalendarViewRoutingModule
  ]
})
export class CalendarViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarViewRoutingModule } from './calendar-view-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
 
  ],
  imports: [
    CommonModule,
    CalendarViewRoutingModule,
    SharedModule
  ]
})
export class CalendarViewModule { }

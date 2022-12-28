import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CurriculumViewComponent } from './curriculum-view/curriculum-view.component';
import { GraduateDetailsComponent } from './graduate-details/graduate-details.component';


@NgModule({
  declarations: [
    CalendarViewComponent,
    CurriculumViewComponent,
    GraduateDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

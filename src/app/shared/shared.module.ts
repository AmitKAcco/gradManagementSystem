import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CurriculumViewComponent } from './curriculum-view/curriculum-view.component';
import { GraduateDetailsComponent } from './graduate-details/graduate-details.component';
import { SharedDashBoardComponent } from './shared-dash-board/shared-dash-board.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CalendarViewComponent,
    CurriculumViewComponent,
    GraduateDetailsComponent,
    SharedDashBoardComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule

  ],
  exports: [
    CalendarViewComponent,
    CurriculumViewComponent,
    GraduateDetailsComponent,
    SharedDashBoardComponent,
  ]
})
export class SharedModule { }

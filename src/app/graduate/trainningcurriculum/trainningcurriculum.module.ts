import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainningcurriculumRoutingModule } from './trainningcurriculum-routing.module';
import { HomeComponent } from './home/home.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TrainningcurriculumRoutingModule,
    WidgetsModule
  ]
})
export class TrainningcurriculumModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainningcurriculumRoutingModule } from './trainningcurriculum-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TrainningcurriculumRoutingModule
  ]
})
export class TrainningcurriculumModule { }

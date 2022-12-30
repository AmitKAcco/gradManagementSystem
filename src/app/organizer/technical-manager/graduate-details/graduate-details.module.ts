import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailsRoutingModule } from './graduate-details-routing.module';
import { HomeComponent } from './home/home.component';
import { AddGrauateComponent } from './add-grauate/add-grauate.component';
import { ViewGraduateComponent } from './view-graduate/view-graduate.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddGrauateComponent,
    ViewGraduateComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailsRoutingModule
  ]
})
export class GraduateDetailsModule { }

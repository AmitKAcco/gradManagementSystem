import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailsRoutingModule } from './graduate-details-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailsRoutingModule
  ]
})
export class GraduateDetailsModule { }

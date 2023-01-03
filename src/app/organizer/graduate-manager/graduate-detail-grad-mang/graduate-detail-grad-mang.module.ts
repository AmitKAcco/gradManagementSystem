import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailGradMangRoutingModule } from './graduate-detail-grad-mang-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailGradMangRoutingModule
  ]
})
export class GraduateDetailGradMangModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
 
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }

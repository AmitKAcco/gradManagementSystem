import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockInterviewRoutingModule } from './mock-interview-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MockInterviewRoutingModule
  ]
})
export class MockInterviewModule { }

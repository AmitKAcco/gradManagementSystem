import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockInterviewRoutingModule } from './mock-interview-routing.module';
import { HomeComponent } from './home/home.component';
import { AddMockInterviewComponent } from './add-mock-interview/add-mock-interview.component';
import { ViewMockInterviewComponent } from './view-mock-interview/view-mock-interview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    AddMockInterviewComponent,
    ViewMockInterviewComponent
  ],
  imports: [
    CommonModule,
    MockInterviewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule
  ]
  // ,
  // exports:[
  //   AddMockInterviewComponent,
  //   ViewMockInterviewComponent
  // ]
})
export class MockInterviewModule { }

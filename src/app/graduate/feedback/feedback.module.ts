import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { FeedbackRoutingModule } from './feedback-routing.module';
import { HomeComponent } from './home/home.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    HomeComponent,
    AddFeedbackComponent,
    ViewFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports : [
    ViewFeedbackComponent
  ]
})
export class FeedbackModule { }

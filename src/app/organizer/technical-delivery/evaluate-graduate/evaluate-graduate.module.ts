import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateGraduateRoutingModule } from './evaluate-graduate-routing.module';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewEvaluationComponent } from './view-evaluation/view-evaluation.component';

@NgModule({
  declarations: [
    AddEvaluationComponent,
    HomeComponent,
    ViewEvaluationComponent
  ],
  imports: [
    CommonModule,
    EvaluateGraduateRoutingModule,
    MatTabsModule,
    RouterModule
  ]
})
export class EvaluateGraduateModule { }

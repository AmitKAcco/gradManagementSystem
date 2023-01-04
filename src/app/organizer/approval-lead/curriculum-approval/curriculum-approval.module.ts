import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumApprovalRoutingModule } from './curriculum-approval-routing.module';
import { CurriculumDesignModule } from '../../technical-delivery/curriculum-design/curriculum-design.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CurriculumApprovalRoutingModule,
    CurriculumDesignModule
  ]
})
export class CurriculumApprovalModule { }

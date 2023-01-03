import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CurriculumDesignRoutingModule } from './curriculum-design-routing.module';
import { AddCurriculumComponent } from './add-curriculum/add-curriculum.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AddCurriculumComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CurriculumDesignRoutingModule,
    MatTabsModule,
    RouterModule
  ]
})
export class CurriculumDesignModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsOnboardingRoutingModule } from './clients-onboarding-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent,
    ScheduleInterviewComponent
  ],
  imports: [
    CommonModule,
    ClientsOnboardingRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ClientsOnboardingModule { }

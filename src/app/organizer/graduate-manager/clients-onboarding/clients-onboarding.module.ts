import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsOnboardingRoutingModule } from './clients-onboarding-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
// app\organizer\graduate-manager\clients-onboarding\home\dialog-overview-example-dialog.html
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientsOnboardingRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ClientsOnboardingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalenderApprovalRoutingModule } from './calender-approval-routing.module';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CalenderApprovalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalenderApprovalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }

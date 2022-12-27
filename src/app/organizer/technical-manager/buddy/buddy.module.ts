import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyRoutingModule } from './buddy-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BuddyRoutingModule
  ]
})
export class BuddyModule { }

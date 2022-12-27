import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeebackReceivedRoutingModule } from './feeback-received-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeebackReceivedRoutingModule
  ]
})
export class FeebackReceivedModule { }

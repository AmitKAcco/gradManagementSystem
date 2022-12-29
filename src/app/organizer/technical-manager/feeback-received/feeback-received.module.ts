import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeebackReceivedRoutingModule } from './feeback-received-routing.module';
import { HomeComponent } from './home/home.component';
import { GraduateModule } from 'src/app/graduate/graduate.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeebackReceivedRoutingModule,
    GraduateModule
  ]
})
export class FeebackReceivedModule { }

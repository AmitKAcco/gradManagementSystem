import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderViewRoutingModule } from './calender-view-routing.module';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { HomeComponent } from './home/home.component';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    CalenderViewRoutingModule,
    MatTableModule,
    CdkTableModule
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    CommonModule,
    CalenderViewRoutingModule,
    MatTableModule,
    HomeComponent,
    CdkTableModule
    

  ]
})
export class CalenderViewModule { }

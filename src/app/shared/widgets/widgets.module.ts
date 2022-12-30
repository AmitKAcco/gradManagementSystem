import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { ReuseableTableComponent } from './reuseable-table/reuseable-table.component';

@NgModule({
  declarations: [
    ReuseableTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [
   ReuseableTableComponent
  ],
})
export class WidgetsModule { }

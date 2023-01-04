import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { ReuseableTableComponent } from './reuseable-table/reuseable-table.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ReuseableTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
   ReuseableTableComponent
  ],
})
export class WidgetsModule { }

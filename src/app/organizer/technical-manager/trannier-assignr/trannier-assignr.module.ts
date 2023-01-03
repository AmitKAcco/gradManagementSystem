import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrannierAssignrRoutingModule } from './trannier-assignr-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    TrannierAssignrRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatTabsModule,
    
  ]
})
export class TrannierAssignrModule { }

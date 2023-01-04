import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRequirementsRoutingModule } from './clients-requirements-routing.module';
import { AddRequirementsComponent } from './add-requirements/add-requirements.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';


@NgModule({
  declarations: [
    AddRequirementsComponent,
    ViewRequirementsComponent
  ],
  imports: [
    CommonModule,
    ClientsRequirementsRoutingModule
  ]
})
export class ClientsRequirementsModule { }

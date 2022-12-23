import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { GraduateComponent } from './graduate/graduate.component';
import { ApprovalLeadComponent } from './organizer/approval-lead/approval-lead.component';
import { GraduateMangerComponent } from './organizer/graduate-manger/graduate-manger.component';
import { OtherLeadsComponent } from './organizer/other-leads/other-leads.component';
import { TechnicalManagerComponent } from './organizer/technical-manager/technical-manager.component';
import { TechnicalDeliveryComponent } from './organizer/technical-delivery/technical-delivery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    GraduateComponent,
    ApprovalLeadComponent,
    GraduateMangerComponent,
    OtherLeadsComponent,
    TechnicalManagerComponent,
    TechnicalDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

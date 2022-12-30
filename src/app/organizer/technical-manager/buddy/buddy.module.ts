import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuddyRoutingModule } from './buddy-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBuddyComponent } from './add-buddy/add-buddy.component';
import { ViewBuddyComponent } from './view-buddy/view-buddy.component';
// import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddBuddyComponent,
    ViewBuddyComponent,

  ],
  imports: [
    CommonModule,
    BuddyRoutingModule,
    ReactiveFormsModule
  ],
  exports : [
    AddBuddyComponent,
    ViewBuddyComponent
  ]
})
export class BuddyModule { }

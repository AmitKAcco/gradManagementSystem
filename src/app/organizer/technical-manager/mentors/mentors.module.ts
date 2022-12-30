import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors-routing.module';
import { AddMentorsComponent } from './add-mentors/add-mentors.component';
import { ViewMentorsComponent } from './view-mentors/view-mentors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AddMentorsComponent,
    ViewMentorsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MentorsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AddMentorsComponent,
    ViewMentorsComponent
  ]
})
export class MentorsModule { }

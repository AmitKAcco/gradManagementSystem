import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBuddyComponent } from '../buddy/add-buddy/add-buddy.component';
import { AddMentorsComponent } from './add-mentors/add-mentors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  {
    path : '',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }

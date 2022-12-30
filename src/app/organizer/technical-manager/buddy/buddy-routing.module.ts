import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBuddyComponent } from './add-buddy/add-buddy.component';

const routes: Routes = [
  {
    path : '',
    component : AddBuddyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyRoutingModule { }

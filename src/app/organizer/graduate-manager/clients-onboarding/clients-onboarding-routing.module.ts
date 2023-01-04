import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
     
    ]
  },
  {
    path : 'scheduleInterview',
    component: ScheduleInterviewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsOnboardingRoutingModule { }

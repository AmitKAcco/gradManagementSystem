import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path : ' ',
    redirectTo:'home',
   
  },
  {
    path : 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  }
  ,
  {
    path: 'graduate',
    loadChildren: () =>
      import('./graduate/graduate.module').then((m) => m.GraduateModule),
  },
  {
    path: 'technicalManager',
    loadChildren: () =>
      import('./organizer/technical-manager/technical-manager.module').then((m) => m.TechnicalManagerModule),
  },
  {
    path: 'technicalDelivery',
    loadChildren: () =>
      import('./organizer/technical-delivery/technical-delivery.module').then((m) => m.TechnicalDeliveryModule),
  },
  {
    path: 'approvalLead',
    loadChildren: () =>
      import('./organizer/approval-lead/approval-lead.module').then((m) => m.ApprovalLeadModule),
  },
  {
    path: 'graduateManager',
    loadChildren: () =>
      import('./organizer/graduate-manager/graduate-manager.module').then((m) => m.GraduateManagerModule),
  },
  {
    path: 'others',
    loadChildren: () =>
      import('./organizer/others/others.module').then((m) => m.OthersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

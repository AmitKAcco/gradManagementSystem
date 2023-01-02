import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children: [
      {
        path: 'add',
        component: AddEvaluationComponent
      },
      // {
      //   path: 'view',
      //   component: 
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluateGraduateRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCurriculumComponent } from './add-curriculum/add-curriculum.component';
import { CurriculumViewComponent } from 'src/app/shared/curriculum-view/curriculum-view.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children: [
      {
        path: 'add',
        component: AddCurriculumComponent
      },
      {
        path: 'view',
        component: CurriculumViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumDesignRoutingModule { }

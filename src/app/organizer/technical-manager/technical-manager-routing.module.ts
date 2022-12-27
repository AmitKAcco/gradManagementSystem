import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './childroute.module';
import { MockInterviewsModule } from './layout/mock-interviews/mock-interviews.module';
// import { childRoutes } from './childroute.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
 
    children: [
    ...childRoutes
   ]
    
   
  }
];
console.warn("inside here");
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalManagerRoutingModule {

}

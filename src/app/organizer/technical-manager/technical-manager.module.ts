import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalManagerRoutingModule } from './technical-manager-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MentorModule } from './mentor/mentor.module';
import { MockInterviewsModule } from './layout/mock-interviews/mock-interviews.module';


import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopNavComponent,

  ],
  imports: [
 

    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    TechnicalManagerRoutingModule,

  ],
  
})
export class TechnicalManagerModule { }

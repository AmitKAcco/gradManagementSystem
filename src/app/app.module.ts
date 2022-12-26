import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { flex}

@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: NgChartsConfiguration, useValue: { generateColors: false }
    }
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }

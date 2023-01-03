import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  batchId = [0, 1, 2];
  currVal = 0;
  changed(){
    this.currVal 
  }
}

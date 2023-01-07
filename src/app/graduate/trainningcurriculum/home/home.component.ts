import { Component } from '@angular/core';
import { TranningCurService } from '../tranning-cur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataSource : any;
  batchId : any;
  constructor(private tranningService : TranningCurService){}
  ngOnInit(){
    this.dataSource = this.tranningService.gettranningCirriculum(this.batchId).subscribe();
  }
}

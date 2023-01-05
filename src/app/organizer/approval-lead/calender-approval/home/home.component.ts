import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  dataSource : any;
  batches = [1, 2, 3];
  selectedBatch = 2;
  data: any;
  storeCurrent : any;
  // @Output() sendval = new EventEmitter<any>();
  constructor(private approvalService: GlobalService) {
  }
  ngOnInit(){
   this.approvalService.batchEmitter.subscribe(data =>{
      this.storeCurrent = data;
   })
  }
  onChangeValue(newValue: any) {
    console.log(newValue);
    this.selectedBatch = newValue;
  }
  sendApproval() {
    this.data = {
      batchId: this.storeCurrent,
      techCalendar: true
    }
    this.approvalService.postApproval(this.data)
      .subscribe();
        
  }
  sendDisApproval() {
    this.data = {
      batchId: this.storeCurrent,
      techCalendar: false
    }
    this.approvalService.postApproval(this.data)
      .subscribe();
  }
}

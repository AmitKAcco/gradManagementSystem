import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  batches = [1, 2, 3];
  selectedBatch = 2;
  data: any;
  // @Output() sendval = new EventEmitter<any>();
  constructor(private approvalService: GlobalService) {
  }
  onChangeValue(newValue: any) {
    console.log(newValue);
    this.selectedBatch = newValue;
  }
  sendApproval() {
    this.data = {
      batchId: this.selectedBatch,
      techCurriculum: true
    }
    this.approvalService.postApproval(this.data)
      .subscribe(

    );
  }
  sendDisApproval() {
    this.data = {
      batchId: this.selectedBatch,
      techCurriculum: false
    }
    this.approvalService.postApproval(this.data)
      .subscribe(

    );
  }
}

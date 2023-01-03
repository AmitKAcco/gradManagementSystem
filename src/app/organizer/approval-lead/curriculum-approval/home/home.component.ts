import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  batches = [1, 2, 3];
  selectedBatch = 2;
  data: any;
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
    this.approvalService.postTopic(this.data)
      .subscribe(

    );
  }
  sendDisApproval() {

  }
}

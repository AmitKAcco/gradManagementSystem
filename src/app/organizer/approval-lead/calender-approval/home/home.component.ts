import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // sendApproval() {
  // dataSource : any;
  // batches = [1, 2, 3];
  // selectedBatch = 2;
  // data: any;
  // // @Output() sendval = new EventEmitter<any>();
  // constructor(private approvalService: GlobalService) {
  // }
  // onChangeValue(newValue: any) {
  //   console.log(newValue);
  //   this.selectedBatch = newValue;
  // }
  //   this.data = {
  //     batchId: this.selectedBatch,
  //     techCurriculum: true
  //   }
  //   // this.approvalService.postApproval(this.data)
  //   //   .subscribe(

  //   // );
  //   this.approvalService.getUser(0).subscribe( data=>
  //     this.dataSource = data);
  //     console.log(this.dataSource);
  // }
  // sendDisApproval() {
  //   this.data = {
  //     batchId: this.selectedBatch,
  //     techCurriculum: false
  //   }
  //   this.approvalService.postApproval(this.data)
  //     .subscribe(

  //   );
  // }

}

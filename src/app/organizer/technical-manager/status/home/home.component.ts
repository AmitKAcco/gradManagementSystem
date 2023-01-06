import { Component } from '@angular/core';
import { batchesGet } from 'src/backend.Data';
import { StatusServiceService } from '../status-service.service';
import { StatusData } from '../statusData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  batches: batchesGet[];
  status: StatusData;
  value : any;
  approvalCalendar :number = 0;
  approvalCurriculum :number = 0;
  constructor(private statusService: StatusServiceService) {

  }
  ngOnInit() {
    this.statusService.getStatus().subscribe(data => {
      this.batches = data;
    })

  }


  onChangeValue(newValue: any) {
    console.log(newValue);
    this.value = newValue;
    
  }
  getStatus() {
    this.statusService.getStatusbyBatch(this.value).subscribe(data => {
      this.status = data;
      console.log("hello");
      console.log( data);
      setTimeout(() => {
        this.display();
      }, 1000);
      // // console.log(this.status.length);
      // // if(this.status.length > 0){
      //   this.approvalCalendar = this.status[0].techCalendar;
      //   this.approvalCurriculum = this.status[0].techCurriculum;
      //   console.log(this.approvalCalendar + " " + this.approvalCurriculum);
      // // }
    });
  }
  display(){
    
      this.approvalCalendar = this.status.techCalendar;
      this.approvalCurriculum = this.status.techCurriculum;
      console.log(this.approvalCalendar + " " + this.approvalCurriculum);
 
  }
}

import { Component , OnInit, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { Task } from 'src/app/graduate/feedback/shared/models/task.model';
import { batchesGet } from 'src/backend.Data';
import { SharedDashBoardService } from './shared-dash-board.service';

@Component({
  selector: 'app-shared-dash-board',
  templateUrl: './shared-dash-board.component.html',
  styleUrls: ['./shared-dash-board.component.scss']
})
export class SharedDashBoardComponent {

  batches :any;
  storeBatchName : batchesGet[];
  show : boolean = false;
  totalGrads : number = 0;
  selectedGrads : number = 0;
  totalReq : number = 0;
  unplacedGrads : number = 0;
  constructor(private sharedDashSer : SharedDashBoardService,private global : GlobalService){
  }
  tasks : Task[] = [];
  ngOnInit() {
    this.global.getAllBatches().subscribe(data=>{
      this.storeBatchName = data;
    })
   
  }
 

  filterData(num: any, num1 :any){
    console.log(num);
    console.log(num1)
    this.sharedDashSer.getcount(num1).subscribe(data=>{
      this.totalGrads = data;
    });
    this.sharedDashSer.getcountselected(num1).subscribe(data=>{
      console.log(data);
      this.selectedGrads = data; 
    })
    this.sharedDashSer.getcountRequstion(num1).subscribe(data=>{
      this.totalReq = data;
      
    })
    setTimeout(() => {
      this.unplacedGrads = this.totalGrads - this.selectedGrads;
      this.show = true;
    }, 500);
  }


}

import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { Task } from 'src/app/graduate/feedback/shared/models/task.model';
// import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-reuseable-table',
  templateUrl: './reuseable-table.component.html',
  styleUrls: ['./reuseable-table.component.scss']
})
export class ReuseableTableComponent implements OnInit {

  @Input() rowData: any;
  @Input() colData: any;
  

  rows: any;
  columns: any;
  displayedColumns: any;
  dataSource: any;

  constructor(private f : GlobalService){
    // this.rows = this.rowData;
    // this.columns = this.colData;
  }
  tasks : Task[] = [];
  ngOnInit() {
    // console.log( this.rowData);
    this.f.positonBehaviourA.subscribe(data => {
      this.dataSource =[...this.dataSource, data]
      console.log("hello" + this.dataSource.value);
    
    });
    this.dataSource = this.rowData;
    console.log(this.rowData)
    // console.log("Got it");

    // console.log( this.rowData );
    

    this.columns = this.colData;
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
  }

  

 
  
  

}

// export class ExampleDataSource extends DataSource<any> {

//   connect(): Observable<Element[]> {
//     const aa = new ReuseableTableComponent();
//     console.log("ggggggggg");
   
//       console.log(aa.rows);
   
//     return of(aa.rows);  
//   }

//   disconnect() {}
// }

import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor(){
    // this.rows = this.rowData;
    // this.columns = this.colData;
    
  }

  ngOnInit() {
    // console.log( this.rowData);
    this.dataSource = this.rowData;
    console.log( this.dataSource );
    

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

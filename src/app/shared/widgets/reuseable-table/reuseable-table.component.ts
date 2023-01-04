import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource:any;
  apiResponse : any;
  constructor(private global : GlobalService){
  }
  tasks : Task[] = [];
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.rowData);
    this.columns = this.colData;
    console.log(this.dataSource);
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
    console.log(this.dataSource);
   
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return data.batchId == filter;
    }
  }
 

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }


}

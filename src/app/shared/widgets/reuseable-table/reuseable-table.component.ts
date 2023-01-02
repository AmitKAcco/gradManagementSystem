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

  constructor(private global : GlobalService){
  
  }
  tasks : Task[] = [];
  ngOnInit() {


    this.global.Trigger.subscribe(data => {
        this.dataSource = this.rowData;
        console.log("i am triggered");
    });
    this.dataSource = this.rowData;
    this.columns = this.colData;
    console.log(this.dataSource);
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
  }

}

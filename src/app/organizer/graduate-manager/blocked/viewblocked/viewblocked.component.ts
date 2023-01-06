import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlockedService } from '../blocked.service';

@Component({
  selector: 'app-viewblocked',
  templateUrl: './viewblocked.component.html',
  styleUrls: ['./viewblocked.component.scss']
})
export class ViewblockedComponent {

  constructor(private blockedService : BlockedService) {}

  dataSource:any;
  ngOnInit(): void {
    this.blockedService.getBlocked()
    .subscribe(data => {
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource<any>(data);

    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }


  // displayedColumns: string[] = ['batchId','batchName','empId','empName','jobId','client','interviewScheduled','selected'];
  displayedColumns: string[] = ['batchId','interviewScheduled'];

  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }





  
  columns = [
    { columnDef: 'batchId',   header: 'Batch Id', cell: (element: any) => `${element.batchId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'empId',   header: 'Employee ID', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'empName',   header: 'Employee Name', cell: (element: any) => `${element.empName}`  },
    { columnDef: 'jobId',   header: 'Job ID', cell: (element: any) => `${element.jobId}`  },
    { columnDef: 'client',     header: 'Client',   cell: (element: any) => `${element.client}`},
    { columnDef: 'interviewScheduled',     header: 'Tnterview Scheduled status',   cell: (element: any) => `${element.interviewScheduled}`},
    { columnDef: 'selected',     header: 'Selected Status',   cell: (element: any) => `${element.selected}`},
  ];

  

}

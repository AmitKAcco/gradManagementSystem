import { Component } from '@angular/core';
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
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }
  columns = [
    //{ columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
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

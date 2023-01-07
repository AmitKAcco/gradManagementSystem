import { Component } from '@angular/core';
import { ScheduleInterviewService } from '../schedule-interview.service';
@Component({
  selector: 'app-view-interview',
  templateUrl: './view-interview.component.html',
  styleUrls: ['./view-interview.component.scss']
})
export class ViewInterviewComponent {

  constructor(private scheduleInterviewService : ScheduleInterviewService) {}

  dataSource:any;
  ngOnInit(): void {
    this.scheduleInterviewService.getInterview()
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
    { columnDef: 'gradName',   header: 'Graduate Name', cell: (element: any) => `${element.gradName}`  },
    { columnDef: 'jobId',   header: 'JobId', cell: (element: any) => `${element.jobId}`  },
    { columnDef: 'interviewDate',     header: 'Interview Date',   cell: (element: any) => `${element.interviewDate}`},
    { columnDef: 'time',   header: 'Interview Time', cell: (element: any) => `${element.time}` }
  ];

}

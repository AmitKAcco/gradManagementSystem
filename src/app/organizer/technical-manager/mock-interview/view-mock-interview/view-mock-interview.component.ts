import { Component } from '@angular/core';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-view-mock-interview',
  templateUrl: './view-mock-interview.component.html',
  styleUrls: ['./view-mock-interview.component.scss']
})
export class ViewMockInterviewComponent {
  constructor(private interviewService : InterviewService) {}

  dataSource:any;
  ngOnInit(): void {
    this.interviewService.getMockInterview()
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
    { columnDef: 'empId',   header: 'Employee ID', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'interviewerName',   header: 'Interviewer Name', cell: (element: any) => `${element.interviewerName}`  },
    { columnDef: 'interviewDate',     header: 'Interview Date',   cell: (element: any) => `${element.interviewDate}`},
    { columnDef: 'time',   header: 'Interview Time', cell: (element: any) => `${element.time}` }, 
    
   
   
    
   
   
 
  ];


}

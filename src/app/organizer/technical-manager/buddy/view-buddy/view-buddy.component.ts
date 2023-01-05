import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-view-buddy',
  templateUrl: './view-buddy.component.html',
  styleUrls: ['./view-buddy.component.scss']
})
export class ViewBuddyComponent {
  constructor(private buddyService : RegistrationService) {}

  dataSource:any;
  ngOnInit(): void {
    this.buddyService.getBuddy()
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
    { columnDef: 'gradId',   header: 'Graduate ID', cell: (element: any) => `${element.graId}`  },
    { columnDef: 'buddyId',   header: 'Buddy ID', cell: (element: any) => `${element.buddyId}`  },
    { columnDef: 'gradName',     header: 'Graduate Name',   cell: (element: any) => `${element.gradName}`},
    { columnDef: 'buddyName',     header: 'Buddy Name',   cell: (element: any) => `${element.buddyName}`},
    
   
   
    
   
   
 
  ];

}

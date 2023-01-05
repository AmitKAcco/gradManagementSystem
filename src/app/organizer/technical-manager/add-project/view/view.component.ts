import { Component } from '@angular/core';
import { AddprojectServiceService } from '../addproject-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(private addProjectService : AddprojectServiceService) {}

  dataSource:any;
  ngOnInit(): void {
    this.addProjectService.getAddProject()
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
    
    { columnDef: 'projectName',   header: 'Project Name', cell: (element: any) => `${element.projectName}`  },
    
   
   
    
   
   
 
  ];

}

import { Component } from '@angular/core';
import { EvaluateGradService } from '../evaluate-grad.service';
@Component({
  selector: 'app-view-evaluation',
  templateUrl: './view-evaluation.component.html',
  styleUrls: ['./view-evaluation.component.scss']
})
export class ViewEvaluationComponent {

  constructor(private evaluateGradService : EvaluateGradService) {}

  dataSource:any;

  ngOnInit(): void {
    this.evaluateGradService.getEvaluateGrad()
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
    { columnDef: 'teamNumber',   header: 'Team Number', cell: (element: any) => `${element.teamNumber}`  },
    { columnDef: 'projectName',   header: 'Project Name', cell: (element: any) => `${element.projectName}`  },
    { columnDef: 'date',     header: 'Scheduled Date',   cell: (element: any) => `${element.date}`},
    { columnDef: 'description',   header: 'Evaluation description', cell: (element: any) => `${element.description}` }, 
    
    { columnDef: 'projectProgress',   header: 'Project Progress', cell: (element: any) => `${element.projectProgress}`  },
   
    
   
   
 
  ];

}

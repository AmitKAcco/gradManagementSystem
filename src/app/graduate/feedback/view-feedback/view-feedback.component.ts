import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';


import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent {
  tasks: Task[] = [];
  constructor(private feedback: FeedbackService) {}

  dataSource:any;

  ngOnInit(): void {
    this.feedback.positonBehaviourA.subscribe(data => {
      this.tasks.push(data);
      this.dataSource = [data];
    });
  }

  columns = [
   
    { columnDef: 'id', header: 'Id',    cell: (element: any) => `${element.id}` },
    { columnDef: 'title',     header: 'Title',   cell: (element: any) => `${element.title}`     },
    { columnDef: 'note',   header: 'Note', cell: (element: any) => `${element.note}`   },
 
  ];

}

import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';


import { FeedbackService } from '../feedback.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent {
  tasks: Task[] = [];

  constructor(private feedback: FeedbackService, private global : GlobalService) {}

  dataSource:any;

  ngOnInit(): void {
    this.feedback.getFeedback()
    .subscribe(data => {
      this.dataSource = data;
    });
    
  }
  displayedColumns: string[] = ['feedbackId', 'feedbackNote'];
  // columns = [
  //   { columnDef: 'id', header: 'Id',    cell: (element: any) => `${element.feedbackId}` },
  //   { columnDef: 'title',     header: 'Title',   cell: (element: any) => `${element.feedbackNote}`},
  //   { columnDef: 'note',   header: 'Note', cell: (element: any) => `${element.note}`   },
  // ];
  

}

import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { FeedbackService } from '../add-feedback/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {

  tasks: Task[] = [
  ];
  constructor(private feedback : FeedbackService){
    
  }
  ngOnInit() : void {
    this.tasks.push(new Task('one', 'hiii amit', 1));
    this.feedback.positonBehaviourA.subscribe(d =>this.tasks.push(d))  ;
  }
  
}

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
  constructor(private feedback: FeedbackService) {

  }
  ngOnInit(): void {
    this.feedback.positonBehaviourA.subscribe(d => this.tasks.push(d));
  }
}

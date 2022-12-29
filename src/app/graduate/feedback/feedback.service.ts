import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public positonBehaviourA = new Subject<Task>();
  constructor() { }
  private taskId: number = 0;
  sendTask(sessionName: string, note: string) {
    this.taskId = this.taskId + 1;
    this.positonBehaviourA.next(new Task(sessionName, note, this.taskId));
  }
}

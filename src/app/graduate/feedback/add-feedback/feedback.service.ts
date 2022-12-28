import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  public positonBehaviourA = new Subject<Task>();
  constructor() { }

  sendTask(sessionName : string, note ?: string, id ?: number){
    this.positonBehaviourA.next(new Task(sessionName, note, id));
  }

}

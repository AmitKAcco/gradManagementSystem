import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './graduate/feedback/shared/models/task.model';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  public Trigger = new Subject<number>();
  constructor() { }
  private taskId: number = 0;
  trigger() {
    this.Trigger.next(1);
  }
}

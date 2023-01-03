import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FeedbackService } from '../feedback.service';
import { GlobalService } from 'src/app/global.service';
import { Task } from '../shared/models/task.model';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent {
  
  public graduateFeedBack = new FormGroup({
   // sessionName : new FormControl(''),
    feedbackNote : new FormControl(''),
    idfrom : new FormControl('')
  });
  constructor(private feedback : FeedbackService, private global : GlobalService){
    
  }
  // batchIdList = [];
  createTask(){
    console.log('i have been clicked');
  }
  name : string ;
  note : string ;
  id : number = 1;

  public createFeedback(): void {
    this.feedback.register(this.graduateFeedBack.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
  
}

import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent {
  
  public graduateFeedBack = new FormGroup({
    sessionName : new FormControl(''),
    note : new FormControl(''),
    idfrom : new FormControl('')
  });
  constructor(private feedback : FeedbackService){

  }
  createTask(){
    console.log('i have been clicked');
  }
  name : string = "other";
  note : string = "the other this"; 
  id : number = 1;
  public createFeedback(): void {
      if( this.graduateFeedBack.controls.sessionName.value !== null
        &&  this.graduateFeedBack.controls.note.value !== null ){
        this.name = this.graduateFeedBack.controls.sessionName.value;
        this.note = this.graduateFeedBack.controls.note.value;
        this.feedback.sendTask(this.name, this.note);
      }
  }
  
}

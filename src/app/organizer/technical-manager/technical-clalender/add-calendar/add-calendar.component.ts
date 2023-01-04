import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TechnicalcalendarService } from '../technicalcalendar.service';
@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.component.html',
  styleUrls: ['./add-calendar.component.scss']
})
export class AddCalendarComponent {

  TechnicalCalendarForm: FormGroup;

  constructor(private fb :FormBuilder,private technicalCalendarService:TechnicalcalendarService) {}

  batchIdList = [];
  topicIdList = [];
 

  ngOnInit(){
    this.TechnicalCalendarForm = this.fb.group({
      selectBatchId:[''],
      selectTopicId:[''],
      trainingTopicName:[''],
      trainingCalendarDate:Date,
      trainingSession:['']

    });
  }
  onSubmit(){
    console.log(this.TechnicalCalendarForm.value);
    this.technicalCalendarService.postCalendar(this.TechnicalCalendarForm.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }
}
//     //FK
//     @Column(name="batch_id")
//     private int batchId;

//     //FK
//     @Column(name="topic_id")
//     private int topicId;

//     @Column(name="trainingTopic_name")
//     private String trainingTopicName;

//     @Column(name="trainingCalendar_date")
//     private Date trainingCalendarDate;

//     @Column(name="training_session")
//     private String trainingSession;

//     @Column(name="trainingCalendar_approve")
//     private boolean trainingCalendarApprove;


import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TechnicalcalendarService } from '../technicalcalendar.service';
import { GlobalService } from 'src/app/global.service';
import { batchesGet } from 'src/backend.Data';
import { topicNameGet } from '../../trannier-assignr/topicName';
@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.component.html',
  styleUrls: ['./add-calendar.component.scss']
})
export class AddCalendarComponent {

  TechnicalCalendarForm: FormGroup;

  constructor(private fb :FormBuilder,private technicalCalendarService:TechnicalcalendarService,private globalService:GlobalService) {}

 // batchIdList = [];
  //topicIdList = [];

  getBatchName : batchesGet[];
  getTopicName : topicNameGet[];
  submitted : boolean = false;
  
 

  ngOnInit(){
    this.TechnicalCalendarForm = this.fb.group({
      batchName:['',[Validators.required]],
      trainingTopicName:['',[Validators.required]],
      trainingCalendarDate:Date,
      trainingSession:['',[Validators.required]]

    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    })
    this.globalService.getTopic().subscribe(data => {
      this.getTopicName = data;
    })
  }
  get batchName() {
    return this.TechnicalCalendarForm.get('batchName');
  }

  get trainingTopicName() {
    return this.TechnicalCalendarForm.get('trainingTopicName');
  }
  get trainingSession() {
    return this.TechnicalCalendarForm.get('trainingSession');
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


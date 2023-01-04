import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.scss']
})
export class ScheduleInterviewComponent {

  scheduleInterview : FormGroup;
  constructor(private fb: FormBuilder, private onboarding : OnboardingService) { }
 
  batchIdList = [1,2];
  empIdList = [1,2];
  jobIdList = [1,2];

  ngOnInit() {
    this.scheduleInterview = this.fb.group({
      batchId : [''],
      empId : [''],
      jobId : [''],
      interviewDate : Date,
      time : [''],
      
    })
  }
 
  onSubmit(){
    console.log(this.scheduleInterview.value);
    this.onboarding.schedule(this.scheduleInterview.value)
    .subscribe(
     
      response => {
      console.log('Success!', response)
    },  
      error => console.error('Error!', error)
    );
  }

}

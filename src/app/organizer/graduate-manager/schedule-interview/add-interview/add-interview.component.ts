import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent {
  scheduleInterview : FormGroup;
  constructor(private fb: FormBuilder) { }
 
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
    // this.onboarding.schedule(this.scheduleInterview.value)
    // .subscribe(
     
    //   response => {
    //   console.log('Success!', response)
    // },  
    //   error => console.error('Error!', error)
    // );
  }
}

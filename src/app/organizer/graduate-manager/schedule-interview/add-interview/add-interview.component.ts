import { Component } from '@angular/core';
import {  FormBuilder,FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';
import { ScheduleInterviewService } from '../schedule-interview.service';
import { jobData } from 'src/app/jobData';


@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent {
  scheduleInterview : FormGroup;
  constructor(private fb: FormBuilder ,private scheduleInterviewService : ScheduleInterviewService ,private globalService:GlobalService) { }
 
  batchNameList = [];
  empIdList = [];
  jobIdList = [];

  getEmpId : employeeData[];
  getBatchName : batchesGet[];
  getJob : jobData[];
  submitted : boolean = false;

  ngOnInit() {
    this.scheduleInterview = this.fb.group({
      batchName : ['',[Validators.required]],
      empId : ['',[Validators.required]],
      jobId : ['',[Validators.required]],
      interviewDate : Date,
      time : ['',[Validators.required]],
      
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpId = data;
    });
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    });
    this.globalService.getJob().subscribe(data => {
      this.getJob = data;
    })
  }
  get batchName() {
    return this.scheduleInterview.get('batchName');

  }
  get jobId() {
    return this.scheduleInterview.get('jobId');

  }
  get empId() {
    return this.scheduleInterview.get('empId');

  }
  get interviewDate() {
    return this.scheduleInterview.get('interviewDate');

  }
  get time() {
    return this.scheduleInterview.get('time');

  }
 
  onSubmit(){
    console.log(this.scheduleInterview.value);
    this.scheduleInterviewService.postInterview(this.scheduleInterview.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );

    // this.onboarding.schedule(this.scheduleInterview.value)
    // .subscribe(
     
    //   response => {
    //   console.log('Success!', response)
    // },  
    //   error => console.error('Error!', error)
    // );
  }
}

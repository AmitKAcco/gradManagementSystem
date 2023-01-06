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

  ngOnInit() {
    this.scheduleInterview = this.fb.group({
      batchName : [''],
      empId : [''],
      jobId : [''],
      interviewDate : Date,
      time : [''],
      
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

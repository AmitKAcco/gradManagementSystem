import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { Timestamp } from 'rxjs-compat';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-add-mock-interview',
  templateUrl: './add-mock-interview.component.html',
  styleUrls: ['./add-mock-interview.component.scss']
})
export class AddMockInterviewComponent {

  mockInterview : FormGroup;
  constructor(private fb: FormBuilder ,private interviewService : InterviewService) { }
  empIdList = [];
  batchIdList = [];

  ngOnInit() {
    this.mockInterview = this.fb.group({
       selectEmpId : [''],
       interviewerName : [''],
       interviewDate : Date,
       time : [''],
       selectBatchId : ['']
    })
  }
 
  onSubmit(){
    console.log(this.mockInterview.value);
    this.interviewService.postMockInterview(this.mockInterview.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }
  }


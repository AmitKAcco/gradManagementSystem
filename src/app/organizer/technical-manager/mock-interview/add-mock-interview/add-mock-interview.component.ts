import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { Timestamp } from 'rxjs-compat';

@Component({
  selector: 'app-add-mock-interview',
  templateUrl: './add-mock-interview.component.html',
  styleUrls: ['./add-mock-interview.component.scss']
})
export class AddMockInterviewComponent {

  mockInterview : FormGroup;
  constructor(private fb: FormBuilder) { }
  empIdList = [];
  batchIdList = [];

  ngOnInit() {
    this.mockInterview = this.fb.group({
       selectEmpId : [''],
       interviewerName : [''],
       interviewDate : Date,
       interviewTime : [''],
       selectBatchId : ['']
    })
  }
 
  onSubmit(){
    console.log(this.mockInterview.value);
  }
}

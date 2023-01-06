import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { Timestamp } from 'rxjs-compat';
import { InterviewService } from '../interview.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';

@Component({
  selector: 'app-add-mock-interview',
  templateUrl: './add-mock-interview.component.html',
  styleUrls: ['./add-mock-interview.component.scss']
})
export class AddMockInterviewComponent {

  mockInterview : FormGroup;
  constructor(private fb: FormBuilder ,private interviewService : InterviewService,private globalService:GlobalService) { }
  empIdList = [];
//  batchNameList = [];


 // getBatchName : batchesGet[];
  getEmpId : employeeData[]; 
  ngOnInit() {
    this.mockInterview = this.fb.group({
       empId : [''], 
       interviewerName : [''],
       interviewDate : Date,
       time : Date,
       selectBatchId : ['']
    })
    // this.globalService.getAllBatches().subscribe(data => {
    //   this.getBatchName = data;
    //   console.log(this.getBatchName);
    // })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpId = data;
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

  // @Column(name = "emp_id")
  // private int empId; // Foreign Key
  // @Column(name = "emp_name")
  // private String empName;
  // @Column(name = "interviewer_name")
  // private String interviewerName;
  // @Column(name = "interview_date")
  // private Date interviewDate;
  // @Column(name = "time")
  // private String time;
  // @Column(name = "batch_id")
  // private int batchId;
  // @Column(name = "batchName")
  // private String batchName;// Foreign Key



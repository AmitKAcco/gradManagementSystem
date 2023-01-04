import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { OnboardingService } from '../onboarding.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  graduateBlockStatus: FormGroup;
  constructor(private fb: FormBuilder, private onboarding : OnboardingService,  public router: Router, public route: ActivatedRoute){}

  batchIdList = ['1','2'];
  empIdList = ['1','2'];
  jobIdList = ['1','2'];

  ngOnInit() {
    this.graduateBlockStatus = this.fb.group({
    empId : [''],
    jobId : [''],
    batchId : ['']  
    })
  }

  createTask(){
    console.log('i have been clicked');
  }


  public onSubmit(): void {
     
        console.log(this.graduateBlockStatus.value)
        console.log( this.onboarding.check(this.graduateBlockStatus.value))
        this.onboarding.check(this.graduateBlockStatus.value)
        .subscribe(
         
          response => {
          console.log('Success!', response),
          this.blockStatus = response.blockStatus,
          this.FormIsSubmitted = true
        },  
          error => console.error('Error!', error)
        );
  }
  
  openStatusForm:boolean = false
  blockStatus:boolean = true
  FormIsSubmitted:boolean = false

  check(){
    this.openStatusForm = true
   
  }

}
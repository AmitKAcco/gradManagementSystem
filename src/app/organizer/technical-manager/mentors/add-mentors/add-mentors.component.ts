import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MentorServiceService } from '../mentor-service.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';

@Component({
  selector: 'app-add-mentors',
  templateUrl: './add-mentors.component.html',
  styleUrls: ['./add-mentors.component.scss']
})
export class AddMentorsComponent {
  MentorForm: FormGroup;
  
  constructor(private fb: FormBuilder, private mentorService:MentorServiceService,private globalService : GlobalService) { }

  //batchIdList = [];
 // empIdGradList = [];
  //empIdMentorList = [];

  getEmpId : employeeData[];
  getMentorEmpId : employeeData[];

 // getBatchName = batchesGet[];

  ngOnInit() {
    this.MentorForm = this.fb.group({
      empIdGrad:[''],
      empIdMentor:[''],
      clientProjectName:[''],
      stakeholderName:[''],
      client:['']
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpId = data;
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getMentorEmpId = data;
    })
    


  }


  onSubmit(){
    console.log(this.MentorForm.value);
    this.mentorService.postMentor(this.MentorForm.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }
}

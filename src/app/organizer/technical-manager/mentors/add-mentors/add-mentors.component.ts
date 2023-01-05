import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MentorServiceService } from '../mentor-service.service';
@Component({
  selector: 'app-add-mentors',
  templateUrl: './add-mentors.component.html',
  styleUrls: ['./add-mentors.component.scss']
})
export class AddMentorsComponent {
  MentorForm: FormGroup;
  
  constructor(private fb: FormBuilder, private mentorService:MentorServiceService) { }

  batchIdList = [];
  empIdGradList = [];
  empIdMentorList = [];

  ngOnInit() {
    this.MentorForm = this.fb.group({
      batchName:[''],
      selectEmpIdGrad:[''],
      selectEmpIdMentor:[''],
      clientProjectName:[''],
      stakeholderName:[''],
      client:['']
    });

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

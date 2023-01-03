import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-mentors',
  templateUrl: './add-mentors.component.html',
  styleUrls: ['./add-mentors.component.scss']
})
export class AddMentorsComponent {
  MentorForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  batchIdList = [];
  empIdGradList = [];
  empIdMentorList = [];

  ngOnInit() {
    this.MentorForm = this.fb.group({
      selectBatchId:[''],
      selectEmpIdGrad:[''],
      selectEmpIdMentor:[''],
      clientProjectName:[''],
      stakeholderName:[''],
      client:['']
    });

  }


  onSubmit(){
    console.log(this.MentorForm.value);
  }
}

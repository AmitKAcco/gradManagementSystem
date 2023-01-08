import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { AbstractControlOptions } from '@angular/forms';
import { UserService } from './user.service';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';
import { BuddyService } from '../buddy.service';
@Component({
  selector: 'app-add-buddy',
  templateUrl: './add-buddy.component.html',
  styleUrls: ['./add-buddy.component.scss']
})
export class AddBuddyComponent implements OnInit{
 
  buddyForm: FormGroup;

  constructor(private fb: FormBuilder,private buddyService:BuddyService,private globalService:GlobalService) { }
  
  getEmpId : employeeData[];
  getBuddyEmpId : employeeData[];
  ngOnInit() {
    this.buddyForm = this.fb.group({
          gradId : ['',[Validators.required]],
          buddyId : ['',[Validators.required]]         
      })
      this.globalService.getAllEmployees().subscribe(data => {
        this.getEmpId = data;
      })
      this.globalService.getAllEmployees().subscribe(data => {
        this.getBuddyEmpId = data;
      })
     
  }
  get gradId(){
    return this.buddyForm.get('gradId');
  }

  get buddyId(){
    return this.buddyForm.get('buddyId');
  }
  onSubmit(){
    console.log(this.buddyForm.value);
    this.buddyService.postBuddy(this.buddyForm.value)
    .subscribe(
       // response => console.log('Success!', response),
      // error => console.error('Error!', error)

    );
  }
  // onSubmit() {
  //   console.log(this.registrationForm.value);
  //   this._registrationService.register(this.registrationForm.value)
  //     .subscribe(
  //       response => console.log('Success!', response),
  //       error => console.error('Error!', error)
  //     );
  // }
}


// @Column(name = "batchName")
// private String batchName;

// //FK
// @Column(name="grad_id")
// private int gradId;

// @Column(name="buddy_id")
// private int buddyId;

// @Column(name="grad_name")
// private String gradName;

// @Column(name="buddy_name")
// private String buddyName;


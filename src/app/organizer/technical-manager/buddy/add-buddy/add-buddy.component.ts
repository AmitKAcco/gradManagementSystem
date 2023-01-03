import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { ForbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { AbstractControlOptions } from '@angular/forms';
import { UserService } from './user.service';
@Component({
  selector: 'app-add-buddy',
  templateUrl: './add-buddy.component.html',
  styleUrls: ['./add-buddy.component.scss']
})
export class AddBuddyComponent implements OnInit{
 
  buddyForm: FormGroup;

  constructor(private fb: FormBuilder,private _registrationService: RegistrationService, private ser : UserService) { }
  here = ['one' , 'two', 'three'];
  ngOnInit() {
    this.buddyForm = this.fb.group({
          gradId : [''],
          batchId : [''],
          buddyId : [''],
          gradName : [''],
          buddyName : ['']
      })
      this.ser.getHeroes()
        .subscribe(arg => console.log(arg));
  }

  onSubmit(){
    console.log(this.buddyForm.value);
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

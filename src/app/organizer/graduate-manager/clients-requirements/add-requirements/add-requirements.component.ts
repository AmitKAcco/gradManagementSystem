import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ClientrequirementsService } from '../clientrequirements.service';
@Component({
  selector: 'app-add-requirements',
  templateUrl: './add-requirements.component.html',
  styleUrls: ['./add-requirements.component.scss']
})
export class AddRequirementsComponent {

  clientRequirements : FormGroup;
  constructor(private fb: FormBuilder ,private clientRequirementService : ClientrequirementsService) { }
  jobIdList = [];
  batchIdList = [];

  ngOnInit() {
    this.clientRequirements = this.fb.group({
       selectBatchId : [''],
       selectJobId : [''],
       noOfPositions : [''],
       stakeholder : [''],
       department : [''],
       location : [''],
       gender : ['']
      
       
    })
  }
 
  onSubmit(){
    console.log(this.clientRequirements.value);
    this.clientRequirementService.postClientRequirements(this.clientRequirements.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }

}

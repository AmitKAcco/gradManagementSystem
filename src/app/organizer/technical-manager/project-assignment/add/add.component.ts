import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectAssignmentForm: FormGroup;
  
  constructor(private fb: FormBuilder){ }
  
  batchIdList = [];
  
  ngOnInit(){
    this.projectAssignmentForm = this.fb.group({
      selectBatchId: [''],
      teamNumber:[''],
      empId : [''],
      projectLead1:[''],
      projectLead2:[''],
      projectName:['']

    })
  }

  onSubmit(){
    console.log(this.projectAssignmentForm.value);
  }

}

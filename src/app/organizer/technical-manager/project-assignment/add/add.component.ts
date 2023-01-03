import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectAssignmentService } from '../project-assignment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectAssignmentForm: FormGroup;
  
  constructor(private fb: FormBuilder,private projectAssignmentService:ProjectAssignmentService){ }
  
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
    this.projectAssignmentService.postProjectAssignment(this.projectAssignmentForm.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }

}

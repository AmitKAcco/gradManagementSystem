import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectAssignmentService } from '../project-assignment.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectAssignmentForm: FormGroup;
  
  constructor(private fb: FormBuilder,private projectAssignmentService:ProjectAssignmentService,private globalService : GlobalService){ }
  
 // batchIdList = [];

 getBatchName : batchesGet[];
  
  ngOnInit(){
    this.projectAssignmentForm = this.fb.group({
      batchName: [''],
      teamNumber:[''],
      empId : [''],
      projectLead1:[''],
      projectLead2:[''],
      projectName:['']
    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
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

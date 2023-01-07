import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectAssignmentService } from '../project-assignment.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { FormArray } from '@angular/forms';
import { Graduate } from './graduate.data';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectAssignmentForm: FormGroup;

  constructor(private fb: FormBuilder, private projectAssignmentService: ProjectAssignmentService, private globalService: GlobalService) { }

  // batchIdList = [];

  getBatchName: batchesGet[];
  getEmpName: Graduate[];
  ngOnInit() {
    this.projectAssignmentForm = this.fb.group({
      batchName: [''],
      teamNumber: [''],
      allotedEmp: [''],
      projectLead1: [''],
      projectLead2: [''],
      projectName: [''],
      empIds: this.fb.array([])
    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpName = data;
    })
  }
  get empIds() {
    return this.projectAssignmentForm.get('empIds') as FormArray;
  }

  addEmpIds() {
    this.empIds.push(this.fb.control(''));
  }

  n = 0;
  empVal = "";
  s: any;
  onSubmit() {
    console.log(this.n = this.projectAssignmentForm.value.empIds.length);
    this.n = this.projectAssignmentForm.value.empIds.length;
    for (let i = 0; i < this.n; i++) {
      this.s = this.projectAssignmentForm.value.empIds[i];
      for (let j = 0; j < this.getEmpName.length; j++) {
        console.log(this.s +  "" + this.getEmpName[i].empId);
        if (this.s == this.getEmpName[j].empId) {
          this.empVal = this.empVal+ " " +this.getEmpName[i].employeeName;
        }
      }
    }
      this.projectAssignmentForm.value.allotedEmp = this.empVal;
      console.log( this.projectAssignmentForm.value.empName)
      console.log(this.projectAssignmentForm.value);
      this.projectAssignmentService.postProjectAssignment(this.projectAssignmentForm.value)
        .subscribe(
      );
    }
  
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BlockedService } from '../blocked.service';
import { batchesGet } from 'src/backend.Data';
import { employeeData } from 'src/app/employeeData';
import { GlobalService } from 'src/app/global.service';
import { jobData } from 'src/app/jobData';
@Component({
  selector: 'app-addblocked',
  templateUrl: './addblocked.component.html',
  styleUrls: ['./addblocked.component.scss']
})
export class AddblockedComponent {

  blocked : FormGroup;
  constructor(private fb: FormBuilder ,private blockedService : BlockedService,private globalService:GlobalService) { }
  empIdList = [];
  batchNameList = [];
  jobIdList = [];

  getBatchName : batchesGet[];
  getEmployeeId : employeeData[];
  getJobId : jobData[];
  submitted : boolean = false;

  ngOnInit() {
    this.blocked = this.fb.group({
       batchName : ['',[Validators.required]],
       empId : ['',[Validators.required]],
       jobId : ['',[Validators.required]],
       
       
       
    });
    this.globalService.getAllBatches().subscribe(data=> {
      this.getBatchName = data;
    });
    this.globalService.getAllEmployees().subscribe(data=> {
      this.getEmployeeId = data;
    });
    this.globalService.getJob().subscribe(data=> {
      this.getJobId= data;
    })
  }
  get batchName() {
    return this.blocked.get('batchName');

  }
  get jobId() {
    return this.blocked.get('jobId');

  }
  get empId() {
    return this.blocked.get('empId');

  }
 
  onSubmit(){
    console.log(this.blocked.value);
    this.blockedService.postBlocked(this.blocked.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }

}

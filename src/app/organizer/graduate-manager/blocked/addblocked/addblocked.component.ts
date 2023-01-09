import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BlockedService } from '../blocked.service';
import { batchesGet } from 'src/backend.Data';
import { employeeData } from 'src/app/employeeData';
import { GlobalService } from 'src/app/global.service';
import { jobData } from 'src/app/jobData';
import { elegibity } from '../elegibity';
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
  batchIdSelected : number = -1;
  jobIdSelected : number = -1;

  getBatchName : batchesGet[];
  getEmployeeId : employeeData[];
  getJobId : jobData[];
  submitted : boolean = false;
  dataHere = new elegibity();
  elegibleList : employeeData[];
  isDisabled = true;
  batchGiven = true;
  jobGiven = true;
  ngOnInit() {
    this.blocked = this.fb.group({
       batchName : ['',[Validators.required]],
       empId : [{value: '', disabled: true},[Validators.required]],
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
  getBatch(batchId : any){
    //  console.log("hi");
      this.batchIdSelected = batchId;
      // console.log(batchId);
      if(this.jobIdSelected != -1){
          this.dataHere.batchId = batchId;
          this.blockedService.checkEligiblity(this.dataHere).subscribe(data=>{
            this.elegibleList = data;
            // console.log(data);
            this.blocked.get('empId')?.enable();
          });
      }
     
  }
  getJobIdSlected(jobId : any){
      this.jobIdSelected = jobId;
    
      this.dataHere.batchId = this.batchIdSelected;
        if(this.batchIdSelected != -1){
          this.dataHere.jobId =  this.jobIdSelected;
          this.dataHere.batchId = this.batchIdSelected;
          console.log(this.dataHere);
          this.blockedService.checkEligiblity(this.dataHere).subscribe(data=>{
            this.elegibleList = data;
            // console.log(data);
            this.blocked.get('empId')?.enable();
          });
        }
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

import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { JobService } from '../job.service';
import { GlobalService } from 'src/app/global.service';
import { batchesGet } from 'src/backend.Data';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent {

  JobForm: FormGroup;

  constructor(private fb:FormBuilder,private jobService:JobService,private globalService:GlobalService){}

  //batchIdList = [];

  getBatchName : batchesGet[];
  submitted : boolean = false;
  
  ngOnInit(){
    this.JobForm = this.fb.group({
      batchName:['',[Validators.required]],
      client:['',[Validators.required]],
      vertical:['',[Validators.required]]
    })
    this.globalService.getAllBatches().subscribe(data =>{
      this.getBatchName = data;
    })
  }
  get client() {
    return this.JobForm.get('client');

  }
  get vertical() {
    return this.JobForm.get('vertical');

  }
  get batchName() {
    return this.JobForm.get('batchName');

  }
  onSubmit(){
    console.log(this.JobForm.value);
    this.jobService.postJob(this.JobForm.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }

}



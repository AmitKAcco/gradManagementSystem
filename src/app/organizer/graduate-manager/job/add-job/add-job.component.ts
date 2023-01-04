import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { JobService } from '../job.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent {

  JobForm: FormGroup;

  constructor(private fb:FormBuilder,private jobService:JobService){}

  batchIdList = [];
  
  ngOnInit(){
    this.JobForm = this.fb.group({
      selectBatchId:[''],
      client:[''],
      vertical:[''],
      openings:['']
    });
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

//     //FK
//     @Column(name="batch_id")
//     private int batchId;



//     @Column(name="client")
//     private String client;

//     @Column(name = "vertical")
//     private String vertical;


// //    @Column(name="openings")
// //    private int openings;

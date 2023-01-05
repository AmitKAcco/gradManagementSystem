import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BlockedService } from '../blocked.service';

@Component({
  selector: 'app-addblocked',
  templateUrl: './addblocked.component.html',
  styleUrls: ['./addblocked.component.scss']
})
export class AddblockedComponent {

  blocked : FormGroup;
  constructor(private fb: FormBuilder ,private blockedService : BlockedService) { }
  empIdList = [];
  batchIdList = [];
  jobIdList = [];

  ngOnInit() {
    this.blocked = this.fb.group({
       selectBatchId : [''],
       selectEmpId : [''],
       selectJobId : [''],
       
       
       
    })
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

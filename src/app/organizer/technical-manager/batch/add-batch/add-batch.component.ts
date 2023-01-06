import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { batchesGet } from '../../add-project/batchData';
import { BatchService } from '../batch.service';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss']
})
export class AddBatchComponent {

  batchForm :FormGroup;

  constructor(private fb:FormBuilder,private globalService:GlobalService,private batchService:BatchService) {}

  //getBatchName : batchesGet[];

  ngOnInit(){
    this.batchForm = this.fb.group({
      batchName : ['']
    })
  }
  onSubmit(){
    console.log(this.batchForm.value);
    this.batchService.postBatch(this.batchForm.value)
    .subscribe(
      // response => console.log('Success!', response),
     // error => console.error('Error!', error)

   );
  }


}

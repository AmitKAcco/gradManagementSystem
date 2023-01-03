import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectCalendar : FormGroup;
  constructor(private fb: FormBuilder) { }
  batchIdList = [];
  ngOnInit() {
    this.projectCalendar = this.fb.group({
       teamNumber : [''],
       projectName : [''],
       evaluationDate : Date,
       projectProgress : [''],
       description : [''],
       selectBatchId : ['']
    })
  }
 
  onSubmit(){
    console.log(this.projectCalendar.value);
  }

}

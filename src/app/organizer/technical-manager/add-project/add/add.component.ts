import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  addProject : FormGroup;
  constructor(private fb: FormBuilder) { }
  // batches = [{name: 1}, {name: 2}, {name: 3}];
  // selectedBatches = this.batches[1];
  selectedBatch:any;
  ngOnInit() {
    this.addProject = this.fb.group({
          projectName:[''],
          batch:['']
      })
      console.log("here")
  }
  // onChangeObj(newObj:any) {
  //   console.log(newObj);
  //   this.selectedBatch = newObj;
  // }
  batches = 'one two three'.split(' ');
  selectedDevice = 'two';
  onChangeObj(newValue: any) {
    console.log(newValue);
    this.selectedDevice = newValue;
  
}
  
  onSubmit(){
    console.log(this.addProject.value);
  }
}

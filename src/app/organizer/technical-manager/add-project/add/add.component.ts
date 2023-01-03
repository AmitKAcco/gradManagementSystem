import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  addProject : FormGroup;
  batches = [1,2,3];
  selectedBatch = 1;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addProject = this.fb.group({
          projectName:[''],
          batch:['']
      })
  }

  onChangeValue(newValue: any) {
    console.log(newValue);
    this.selectedBatch = newValue;
  }
  
  onSubmit(){
    console.log(this.addProject.value);
  }
}

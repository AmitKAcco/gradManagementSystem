import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { AddprojectServiceService } from '../addproject-service.service';
import { batchesGet } from '../batchData'; 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  addProject : FormGroup;
  batches : batchesGet[];
  selectedBatch = 1;
  constructor(private fb: FormBuilder, private addser : AddprojectServiceService) { }

  ngOnInit() {
    this.addProject = this.fb.group({
          projectName:[''],
          batch:['']
      })
    this.addser.getAddProject().subscribe(data=>{
      this.batches = data;
      // setTimeout(() => {
      //   this.batches = data;
      //   console.log(data);
      // }, 500);
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

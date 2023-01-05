import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { AddprojectServiceService } from '../addproject-service.service';
import { batchesGet } from '../batchData'; 
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  addProject : FormGroup;
  batches : batchesGet[];
  selectedBatch = 1;
  constructor(private fb: FormBuilder, private addser : AddprojectServiceService,private globalService:GlobalService) { }

  ngOnInit() {
    this.addProject = this.fb.group({
          projectName:[''],
          batchName:['']
      })
   this.globalService.getAllBatches().subscribe(data =>{
      this.batches = data;
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

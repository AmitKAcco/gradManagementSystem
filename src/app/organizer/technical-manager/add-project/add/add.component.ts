import { Component } from '@angular/core';

import { FormBuilder , FormGroup, Validator, Validators, AbstractControl} from '@angular/forms';

import { AddprojectServiceService } from '../addproject-service.service';
import { batchesGet } from '../batchData'; 
import { GlobalService } from 'src/app/global.service';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  
  addProject : FormGroup;
  batches : batchesGet[];
  selectedBatch = 1;
  submitted : boolean = false;
  constructor(private fb: FormBuilder, private addser : AddprojectServiceService,private globalService:GlobalService) { }

  ngOnInit() {
    this.addProject = this.fb.group({

          projectName:['',[Validators.required]],
        

          batchName:['' , [Validators.required]]
      })
   this.globalService.getAllBatches().subscribe(data =>{
      this.batches = data;
   })
   
  }
  get f() { return this.addProject.controls; }

  get projectName() {
    return this.addProject.get('projectName');

  }
  get batchName() {
    return this.addProject.get('batchName');

  }


  onChangeValue(newValue: any) {
    console.log(newValue);
    this.selectedBatch = newValue;
  }
  
  onSubmit(){
    console.log(this.addProject.value);
    this.addser.postAddProject(this.addProject.value).subscribe();
  }
}

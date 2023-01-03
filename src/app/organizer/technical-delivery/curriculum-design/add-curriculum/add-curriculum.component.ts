import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.component.html',
  styleUrls: ['./add-curriculum.component.scss']
})
export class AddCurriculumComponent {
  batchIdList : [];
  curriculumDesign : FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.curriculumDesign = this.fb.group({
         batchId : [''],
         topicName : ['']
      })
  }
  onSubmit(){
    console.log(this.curriculumDesign.value);
  }
}

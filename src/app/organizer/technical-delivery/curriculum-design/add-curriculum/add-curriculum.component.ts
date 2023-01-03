import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurriculumDesignService } from '../curriculum-design.service';
@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.component.html',
  styleUrls: ['./add-curriculum.component.scss']
})
export class AddCurriculumComponent {
  batchIdList : [];
  curriculumDesign : FormGroup;
  constructor(private fb: FormBuilder, private curriculumService:CurriculumDesignService) { }
  ngOnInit() {
    this.curriculumDesign = this.fb.group({
         batchId : [''],
         topicName : ['']
      })
  }
  onSubmit(){
    console.log(this.curriculumDesign.value);
    this.curriculumService.postTopic(this.curriculumDesign.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }
}

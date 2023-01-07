import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { CurriculumDesignService } from '../curriculum-design.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.component.html',
  styleUrls: ['./add-curriculum.component.scss']
})
export class AddCurriculumComponent {
  batchNameList : [];
  getBatchName : batchesGet[];
  submitted : boolean = false;
  curriculumDesign : FormGroup;
  constructor(private fb: FormBuilder, private curriculumService:CurriculumDesignService , private globalService: GlobalService) { }
  ngOnInit() {
    this.curriculumDesign = this.fb.group({
         batchName : ['',[Validators.required]],
         topicName : ['',[Validators.required]]
      });
      this.globalService.getAllBatches().subscribe(data=> {
        this.getBatchName = data;
      })
  }
  get batchName() {
    return this.curriculumDesign.get('batchName');

  }
  get topicName() {
    return this.curriculumDesign.get('topicName');

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

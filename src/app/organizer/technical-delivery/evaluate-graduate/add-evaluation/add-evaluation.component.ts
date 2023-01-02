import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';
@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss']
})
export class AddEvaluationComponent {

  evaluationDesgin : FormGroup;
  constructor(private fb: FormBuilder) { }
  batches:[]
  graduates:[]
  topics:[]
  ngOnInit() {
    
    this.evaluationDesgin = this.fb.group({
          selectedBatch : [''],
          graduateSelected : [''],
          topicSelected: [''],
          evaluationDate: Date,
          scoreGiven:[''],
          feedback:['']
      })
  }
  onSubmit(){
    console.log(this.evaluationDesgin.value);
  }
}

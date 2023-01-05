import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';
import { EvaluateGradService } from '../evaluate-grad.service';
@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss']
})
export class AddEvaluationComponent {

  evaluationDesgin : FormGroup;
  constructor(private fb: FormBuilder,private evaluationService : EvaluateGradService ) { }
  batchIdList:[]
  empIdlist:[]
  topics:[]
  ngOnInit() {
    
    this.evaluationDesgin = this.fb.group({
          selectBatchId : [''],
          selectEmpId : [''],
          topicSelected: [''],
          date: Date,
          score:[''],
          feedback:['']
      })
  }
  onSubmit(){
    console.log(this.evaluationDesgin.value);
    this.evaluationService.postEvaluateGrad(this.evaluationDesgin.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
}

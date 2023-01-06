import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';
import { EvaluateGradService } from '../evaluate-grad.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';
//import { ScheduleInterviewService } from '../schedule-interview.service';
import { jobData } from 'src/app/jobData';
import { topicNameGet } from 'src/app/organizer/technical-manager/trannier-assignr/topicName';
@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss']
})
export class AddEvaluationComponent {

  evaluationDesgin : FormGroup;
  constructor(private fb: FormBuilder,private evaluationService : EvaluateGradService ,private globalService:GlobalService) { }
  batchNameList:[]
  empIdlist:[]
  topics:[]

  
  getEmpId : employeeData[];
  getBatchName : batchesGet[];
  getTopicName : topicNameGet[];
  ngOnInit() {
    
    this.evaluationDesgin = this.fb.group({
          batchName : [''],
          empId : [''],
          topicName: [''],
          date: Date,
          score:[''],
          feedback:['']
      })
      this.globalService.getAllEmployees().subscribe(data => {
        this.getEmpId = data;
      });
      this.globalService.getAllBatches().subscribe(data => {
        this.getBatchName = data;
      });
      this.globalService.getTopic().subscribe(data => {
        this.getTopicName = data;
      });
  }
  onSubmit(){
    console.log(this.evaluationDesgin.value);
    this.evaluationService.postEvaluateGrad(this.evaluationDesgin.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }
}

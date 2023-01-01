import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  trannierAssignment: FormGroup;
  constructor(private fb: FormBuilder) { }
  topicNameList:[]
  trannierNameList:[]
  ngOnInit() {
    this.trannierAssignment = this.fb.group({
          topicName:[''],
          trannierName:[''],
          trannningDate:[''],
          tranninngSession:[''],
          tranningObjective:['']
      })
  }
  onSubmit(){
    console.log(this.trannierAssignment.value);
  }
}

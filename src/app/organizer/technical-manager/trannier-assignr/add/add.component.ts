import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';
import { TrainerAssignService } from '../trainer-assign.service';
import { batchesGet } from '../../add-project/batchData';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  trannierAssignment: FormGroup;

  constructor(private fb: FormBuilder,private trainerAssignService: TrainerAssignService) { }
  batchIdList = [];
  topicNameList:[];
  getBatcheId : batchesGet[];
  //trainerNameList:[]
  ngOnInit() {
    this.trannierAssignment = this.fb.group({
          selectBatchId:[''],
          selectTopicName:[''],
          trainerName1:[''],
          trainerName2:[''],
          training_date: Date,
          training_session:[''],
          tranningObjective:['']
          
      })
      console.log("hello")
      this.trainerAssignService.getTrainerAssign().subscribe(data =>{
        this.getBatcheId = data;
      })
  }
  onSubmit(){
    console.log(this.trannierAssignment.value);
    this.trainerAssignService.postTrainerAssign(this.trannierAssignment.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );

  }
}


// @Column(name="batch_id")
// private int batchId;

// //FK
// @Column(name="topic_id")
// private int topicId;

// @Column(name="topic_name")
// private String topicName;


// @Column(name="trainer_name1")
// private String trainerName1;

// @Column(name="trainer_name2")
// private String trainerName2;

// @Column(name="training_date")
// private Date training_date;

// @Column(name="training_session")
// private String training_session;

// @Column(name="training_objective")
// private String trainingObjective;

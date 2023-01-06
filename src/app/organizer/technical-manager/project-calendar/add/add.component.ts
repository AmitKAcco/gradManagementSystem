import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CalendarService } from '../calendar.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectCalendar : FormGroup;
  constructor(private fb: FormBuilder , private calenderService : CalendarService,private globalService:GlobalService) { }
  //batchIdList = [];

  getBatchName : batchesGet[];

  ngOnInit() {
    this.projectCalendar = this.fb.group({
       batchName :[''],
       teamNumber : [''],
       projectName : [''],
       date : Date,
       projectProgress : [''],
       description : [''],
       selectBatchId : ['']
    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    })
  }
 
  onSubmit(){
    console.log(this.projectCalendar.value);
   
    this.calenderService.postCalender(this.projectCalendar.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
    );
  }

}

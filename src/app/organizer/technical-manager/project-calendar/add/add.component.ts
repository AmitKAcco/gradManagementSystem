import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectCalendar : FormGroup;
  constructor(private fb: FormBuilder , private calenderService : CalendarService) { }
  batchIdList = [];
  ngOnInit() {
    this.projectCalendar = this.fb.group({
       teamNumber : [''],
       projectName : [''],
       date : Date,
       projectProgress : [''],
       description : [''],
       selectBatchId : ['']
    })
  }
 
  onSubmit(){
    console.log(this.projectCalendar.value);
   
    this.calenderService.postCalender(this.projectCalendar.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }

}

import { Component } from '@angular/core';
import { TechnicalcalendarService } from '../technicalcalendar.service';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent {

  constructor(private technicalCalendarService:TechnicalcalendarService){}

  dataSource:any;

  ngOnInit(): void {

    this.technicalCalendarService.getCalendar()
    .subscribe(data=> {
      this.dataSource = data;
    });
  }

  // trainingCalendarId":1,"batchId":6302,"topicId":0,"trainingTopicName":"Java",
  // "trainingCalendarDate":"2022-07-18T00:00:00.000+00:00","trainingSession"
  // :"morning","trainingCalendarApprove":true

  columns = [
    { columnDef: 'id', header: 'Training Calendar Id',    cell: (element: any) => `${element.trainingCalendarId}` },
    { columnDef: 'topicId',  header: 'Topic Id',   cell: (element: any) => `${element.topicId}`},
    { columnDef: 'trainingTopicName',   header: 'Training Topic Name', cell: (element: any) => `${element.trainingTopicName}`   },
    { columnDef: 'trainingCalendarDate',   header: 'Training Calendar Date', cell: (element: any) => `${element.trainingCalendarDate}`   },
    { columnDef: 'trainingSession',   header: 'Training Session', cell: (element: any) => `${element.trainingSession}`   }
  ];


}

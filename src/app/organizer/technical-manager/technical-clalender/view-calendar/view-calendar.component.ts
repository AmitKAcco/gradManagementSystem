import { Component } from '@angular/core';
import { TechnicalcalendarService } from '../technicalcalendar.service';
import { GlobalService } from 'src/app/global.service';
import { batchesGet } from '../../add-project/batchData';
@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent {

  constructor(private technicalCalendarService:TechnicalcalendarService, private globalservice : GlobalService){}

  dataSource:any;
  approvalData:any;
  batchvalue : any;
  batches : batchesGet[];
  ngOnInit(): void {

    this.technicalCalendarService.getCalendar()
    .subscribe(data=> {
      this.dataSource = data;
      this.batches = data;
    });
    this.globalservice.batchEmitter.subscribe(data=>{
      this.batchvalue = data;
    }) 
    
    console.log(this.batchvalue)
    this.globalservice.getApproval(1).subscribe(data=>{
      this.approvalData = data;
    })
    setTimeout(() => {
      console.log(this.approvalData);
    }, 1000);
    
  }
  onSelectionChange(newVal: any){
    console.log(newVal);
  }
  
  columns = [
    { columnDef: 'id', header: 'Training Calendar Id',    cell: (element: any) => `${element.trainingCalendarId}` },
    { columnDef: 'topicId',  header: 'Topic Id',   cell: (element: any) => `${element.topicId}`},
    { columnDef: 'trainingTopicName',   header: 'Training Topic Name', cell: (element: any) => `${element.trainingTopicName}`   },
    { columnDef: 'trainingCalendarDate',   header: 'Training Calendar Date', cell: (element: any) => `${element.trainingCalendarDate}`.split("T", 1)   },
    { columnDef: 'trainingSession',   header: 'Training Session', cell: (element: any) => `${element.trainingSession}`   }
  ];


}

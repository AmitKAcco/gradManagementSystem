import { Component } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-view-batch',
  templateUrl: './view-batch.component.html',
  styleUrls: ['./view-batch.component.scss']
})
export class ViewBatchComponent {

  constructor(private batchService:BatchService){}
  dataSource:any;
  ngOnInit(): void {
    this.batchService.getBatch()
    .subscribe(data => {
      this.dataSource = data;
    });
    
  }

  columns = [
    //{ columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
    { columnDef: 'batchId',   header: 'Batch Id', cell: (element: any) => `${element.batchId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  }
  ];


}

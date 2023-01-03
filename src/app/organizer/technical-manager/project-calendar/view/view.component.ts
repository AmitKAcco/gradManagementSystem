import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(private calenderSerivice : CalendarService) {}

  dataSource:any;

  ngOnInit(): void {
    this.calenderSerivice.getCalender()
    .subscribe(data => {
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }
  columns = [
    { columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
    { columnDef: 'title',     header: 'date',   cell: (element: any) => `${element.date}`},
    { columnDef: 'note',   header: 'Note', cell: (element: any) => `${element.note}`   },
  ];
}

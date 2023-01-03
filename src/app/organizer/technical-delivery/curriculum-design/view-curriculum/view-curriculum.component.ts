import { Component } from '@angular/core';
import { CurriculumDesignService } from '../curriculum-design.service';

@Component({
  selector: 'app-view-curriculum',
  templateUrl: './view-curriculum.component.html',
  styleUrls: ['./view-curriculum.component.scss']
})
export class ViewCurriculumComponent {

  constructor(private curriculumService:CurriculumDesignService){}

  dataSource:any;

  ngOnInit(): void {
    this.curriculumService.getTopic()
    .subscribe(data => {
      this.dataSource = data;
    });
    
  }
  // batchId : [''],
  // topicName : ['']

  columns = [
    { columnDef: 'id', header: 'Batch Id',    cell: (element: any) => `${element.batchId}` },
    { columnDef: 'topicName',  header: 'Topic Name',   cell: (element: any) => `${element.topicName}`}
  ];


}

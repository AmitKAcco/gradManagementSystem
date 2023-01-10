import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { batchesGet } from 'src/backend.Data';

@Component({
  selector: 'app-view-batch',
  templateUrl: './view-batch.component.html',
  styleUrls: ['./view-batch.component.scss']
})
export class ViewBatchComponent {

  constructor(private batchService:BatchService){}
  dataSource:any;
  batchDetails : batchesGet[];
  ngOnInit(): void {
  this.batchService.getBatch()
    .subscribe(
      
    );

    
  }
  displayedColumns: string[] = ['batchName'];
}

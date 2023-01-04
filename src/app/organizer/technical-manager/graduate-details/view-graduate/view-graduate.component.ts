import { Component } from '@angular/core';
import { GraduateDetailsService } from '../graduate-details.service';

@Component({
  selector: 'app-view-graduate',
  templateUrl: './view-graduate.component.html',
  styleUrls: ['./view-graduate.component.scss']
})
export class ViewGraduateComponent {

  constructor(private graduateDetailsService:GraduateDetailsService){}

  dataSource:any;

  ngOnInit(): void {
    this.graduateDetailsService.getGrad()
    .subscribe(data => {
      this.dataSource = data;
    });
  
  }
  // selectBatchId:[''],
  // empName:[''],
  // designation:[''],
  // dateOfJoining:Date,
  // mobileNumber:[''],
  // email:[''],
  // dateOfBirth:Date,
  // gender:[''],
  // deliveryDirector:['']
  columns = [
    { columnDef: 'id', header: 'EmpName',    cell: (element: any) => `${element.empName}` },
    { columnDef: 'designation',  header: 'Designation',   cell: (element: any) => `${element.designation}`},
    { columnDef: 'dateOfJoining',   header: 'Date Of Joining', cell: (element: any) => `${element.dateOfJoining}`   },
    { columnDef: 'mobileNumber',   header: 'Mobile Number', cell: (element: any) => `${element.mobileNumber}`   },
    { columnDef: 'email',   header: 'Email', cell: (element: any) => `${element.email}`   },
    { columnDef: 'dateOfBirth',   header: 'Date Of Birth', cell: (element: any) => `${element.dateOfBirth}`   },
    { columnDef: 'gender',   header: 'Gender', cell: (element: any) => `${element.gender}`   },
    { columnDef: 'deliveryDirector',   header: 'Delivery Director', cell: (element: any) => `${element.deliveryDirector}`   }
  ];


}

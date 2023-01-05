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

  // {"empId":8000,"batchId":6000,"batchName":null,"employeeName":"Twinkle","designation":"Software Engineer","dateOfJoining":"2022-11-07T00:00:00.000+00:00","mobileNumber":9211044716,"email":"twinkle@gmail.com","dateOfBirth":"2000-08-30T00:00:00.000+00:00","gender":null,"deliveryDirector":"Vipin","batchesList":[],"blockedList":[],"feedbackList":[],"trainerAssignedList":[],"projectAssignmentList":[],"mockInterviewList":[],"interviewList":[],"checkBlockedList":[],"selectedListList":[]},
  columns = [
    { columnDef: 'empName', header: 'Employee Name',    cell: (element: any) => `${element.employeeName}` },
    { columnDef: 'designation',  header: 'Designation',   cell: (element: any) => `${element.designation}`},
    { columnDef: 'dateOfJoining',   header: 'Date Of Joining', cell: (element: any) => `${element.dateOfJoining}`   },
    { columnDef: 'mobileNumber',   header: 'Mobile Number', cell: (element: any) => `${element.mobileNumber}`   },
    { columnDef: 'email',   header: 'Email', cell: (element: any) => `${element.email}`   },
    { columnDef: 'dateOfBirth',   header: 'Date Of Birth', cell: (element: any) => `${element.dateOfBirth}`   },
    { columnDef: 'gender',   header: 'Gender', cell: (element: any) => `${element.gender}`   },
    { columnDef: 'deliveryDirector',   header: 'Delivery Director', cell: (element: any) => `${element.deliveryDirector}`   }
  ];


}

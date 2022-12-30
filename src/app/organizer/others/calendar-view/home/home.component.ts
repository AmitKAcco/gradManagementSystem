import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PeriodicElement } from './periodic-element';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// import { DataSource } from '@angular/cdk/collections';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { TestService } from '../test.service';
import {Observable, of} from 'rxjs';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit{

  constructor(private st:TestService){}

  dataSource:any;
  
  ngOnInit() {
    this.st.getObj().subscribe(data=>{
            console.log(data.data);
            this.dataSource = data.data;
            console.log("datasource",this.dataSource);
          })
  }

 
  // displayedColumns: string[] = ['date', 'day', 'session', 'topic','objectives','trainer1','trainer2','training_material','exercise_material'];
 
  // data: PeriodicElement[] = [
  //   {date: 1, day: 'Hydrogen', session: 'H', topic: 'Java',objectives:'fvf',trainer1:'prina',trainer2:'gudhka',training_material:'hu',exercise_material:'dddv'},
  //   {date: 2, day: 'Helium', session: 'He', topic: 'angular',objectives:'fv',trainer1:'prina',trainer2:'gudhka',training_material:'hb',exercise_material:'gv'}
  // ];

  // datasource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.datasource.paginator = this.paginator;
  // }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  columns = [
   
    { columnDef: 'id', header: 'Id',    cell: (element: any) => `${element.id}` },
    { columnDef: 'email',     header: 'email',   cell: (element: any) => `${element.email}`     },
    { columnDef: 'first_name',   header: 'first_name', cell: (element: any) => `${element.first_name}`   },
   
    // { columnDef: 'last_name',   header: 'last_name', cell: (element: any) => `${element.last_name}`   },
    // { columnDef: 'avatar',   header: 'avatar', cell: (element: any) => `${element.avatar}`   },
 
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  
//  ELEMENT_DATA: any[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}]

//  dataSource = new ExampleDataSource()
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {date: 1, day: 'Hydrogen', session: 'H', topic: 'Java',objectives:'fvf',trainer1:'prina',trainer2:'gudhka',training_material:'hu',exercise_material:'dddv'},
//     {date: 2, day: 'Helium', session: 'He', topic: 'angular',objectives:'fv',trainer1:'prina',trainer2:'gudhka',training_material:'hb',exercise_material:'gv'}
//   ];
// const aa = new HomeComponent();
// console.log("llllll",aa.columns);
// declare var age: number
// const ELEMENT_DATA: any[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}]
  
  // export class ExampleDataSource extends DataSource<any> {

  //   connect(): Observable<Element[]> {
  //     return of(ELEMENT_DATA);  
  //   }
  
  //   disconnect() {}
  // }

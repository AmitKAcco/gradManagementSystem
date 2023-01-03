import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';

export interface DialogData {
  empId: string;
  jobId: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public graduateBlockStatus = new FormGroup({
    empId : new FormControl(''),
    jobId : new FormControl('')
  });
  constructor(){

  }
  createTask(){
    console.log('i have been clicked');
  }
  empId : string ;
  jobId : string ;
  public onSubmit(): void {
      if( this.graduateBlockStatus.controls.empId.value !== null
        &&  this.graduateBlockStatus.controls.jobId.value !== null ){
        this.empId = this.graduateBlockStatus.controls.empId.value;
        this.jobId = this.graduateBlockStatus.controls.jobId.value;
        console.log(this.empId)
      }
  }
  
  tt:boolean = false

  check(){
    this.tt = true
  }
 
  // empId: string;
  // jobId: string;

  // constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {empId: this.empId, jobId: this.jobId}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.jobId = result;
  //     console.log(result)
  //   });
  // }

}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog implements OnInit{

//   graduateBlockStatus: FormGroup;


//   // public graduateBlockStatus = new FormGroup({
//   //   empId : new FormControl(''),
//   //   jobId : new FormControl('')
//   // });

//   constructor(
//     private fb: FormBuilder,
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
   
//     ) { }
    
//     ngOnInit() {
//       this.graduateBlockStatus = this.fb.group({
//         empId: ['', [Validators.required]],
//         jobId: ['', [Validators.required]],
//       });
//     }

//     get empId() {
//       return this.graduateBlockStatus.get('empId');
//     }

//     get jobId() {
//       return this.graduateBlockStatus.get('jobId');
//     }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   onSubmit(){

//     console.log("hj")
//     // empId = this.graduateBlockStatus.controls.empId.value;
//         // this.jobId = this.graduateBlockStatus.controls.jobId.value;
//     // console.log(this.graduateBlockStatus.controls.empId.value);
//   }
  
// }

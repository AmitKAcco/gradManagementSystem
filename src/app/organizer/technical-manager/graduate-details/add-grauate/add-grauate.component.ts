import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GraduateDetailsService } from '../graduate-details.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-grauate',
  templateUrl: './add-grauate.component.html',
  styleUrls: ['./add-grauate.component.scss']
})
export class AddGrauateComponent {

  graduateForm: FormGroup;

  constructor(private fb: FormBuilder, private graduateDetailsService: GraduateDetailsService,private globalService:GlobalService,private _snackBar: MatSnackBar){ }

  batchNameList = [];
  getBatchName : batchesGet[];
  submitted : boolean =false;

  ngOnInit(){
    this.graduateForm = this.fb.group({
      batchName:['',[Validators.required]],
      employeeName:['',[Validators.required]],
      designation:['',[Validators.required]],
      dateOfJoining:Date,
      mobileNumber:['',[Validators.required]],
      email:['',[Validators.required]],
      dateOfBirth:Date,
      gender:['',[Validators.required]],
      deliveryDirector:['',[Validators.required]]
    });
    this.globalService.getAllBatches().subscribe(data=> {
      this.getBatchName = data;
    })
  }

  get batchName(){
    return this.graduateForm.get('batchName');
  }
  get employeeName(){
    return this.graduateForm.get('employeeName');
  }
  get designation(){
    return this.graduateForm.get('designation');
  }
  get mobileNumber(){
    return this.graduateForm.get('mobileNumber');
  }
  get email(){
    return this.graduateForm.get('email');
  }
  get gender(){
    return this.graduateForm.get('gender');
  }
  get deliveryDirector(){
    return this.graduateForm.get('deliveryDirector');
  }

  onSubmit(){
    console.log(this.graduateForm.value);
    this.graduateDetailsService.postGrad(this.graduateForm.value)
    .subscribe(
      response => {
        console.log("heyy")
        console.log("resp" + response);
        if(response.includes("exists")){
          this._snackBar.open(response, '', {
            // duration: 9000,
            // verticalPosition: 'top',
            // horizontalPosition: 'start',
            panelClass: 'aa'
          });
          
        }
        else{        
          this._snackBar.open(response, '', {
            duration: 9000,
            // verticalPosition: 'top',
            // horizontalPosition: 'start',
            panelClass: 'my-custom-snackbar'
          });
          this.graduateForm.reset();
        }

      },
      error => console.log(error)
    );
  }

}


  //   //FK
  //   @Column(name="batch_id")
  //   private int batchId;

  //   @Column(name="employee_name")
  //   private String employeeName;

  //   @Column(name="designation")
  //   private String designation;

  //   @Column(name="date_of_joining")
  //   private Date dateOfJoining;

  //   @Column(name="mob_no")
  //   private Long mobileNumber;

  //   @Column(name="email")
  //   private String email;

  //   @Column(name="date_of_birth")
  //   private Date dateOfBirth;

  //  @Column(name = "gender")
  //  private String gender;

  //  @Column(name="delivery_director")
  //   private String deliveryDirector;


import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GraduateDetailsService } from '../graduate-details.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-add-grauate',
  templateUrl: './add-grauate.component.html',
  styleUrls: ['./add-grauate.component.scss']
})
export class AddGrauateComponent {

  graduateForm: FormGroup;

  constructor(private fb: FormBuilder, private graduateDetailsService: GraduateDetailsService,private globalService:GlobalService){ }

  batchNameList = [];
  getBatchName : batchesGet[];

  ngOnInit(){
    this.graduateForm = this.fb.group({
      batchName:[''],
      employeeName:[''],
      designation:[''],
      dateOfJoining:Date,
      mobileNumber:[''],
      email:[''],
      dateOfBirth:Date,
      gender:[''],
      deliveryDirector:['']
    });
    this.globalService.getAllBatches().subscribe(data=> {
      this.getBatchName = data;
    })
  }

  onSubmit(){
    console.log(this.graduateForm.value);
    this.graduateDetailsService.postGrad(this.graduateForm.value)
    .subscribe(
      // response => console.log('Success!', response),
      // error => console.error('Error!', error)
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


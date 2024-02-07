import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name:'',
      city: '',
      country: ''
    });

    this.studentForm = new FormGroup({
      studentName: new FormControl('wewewe'),
      college: new FormControl(''),
      area: new FormControl('')
    })
  }

  submitForm(formValue:any){
    // console.log(formValue.value);
  }

  submitStudentForm(){
    console.log(this.studentForm.value);
  }

}

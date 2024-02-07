import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  firstName: string='';
  terms: boolean = false;
  customerType:string = '';
  customerContent:string = '';
  gender:string = ''

  ngOnInit(): void {
   
  }

  addLogin(formValue:NgForm){
// console.log(formValue) --> for full form 
console.log(formValue.value)  // --> for specific value
  }

  resetForm(fromvalue: NgForm) {
    fromvalue.reset()
  }

  setFormValue(fromvalue: NgForm){
    let userDetails = {
      firstName: 'ARC',
      terms: false,
      customerType: '1',
      customerContent: 'dedede',
      gender: 'male'
    }

    fromvalue.setValue(userDetails)

  }

}

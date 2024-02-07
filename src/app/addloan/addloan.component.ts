import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.scss']
})
export class AddloanComponent implements OnInit {
  addLoanTypeForm!: FormGroup

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.addLoanTypeForm = new FormGroup({
    //   'loanName': new FormControl(),
    //   'laonType': new FormControl(),
    //   'loanDescription': new FormControl()
    // })


    // Thia is to set default value in first paramneter of formControl while form creation
    // this.addLoanTypeForm = this.fb.group({
    //     loanName: new FormControl('HDFC loan'),
    //     laonType: new FormControl('Personal Loan'),
    //     loanDescription: new FormControl('this is for person in need')
    // })

    //form array
    // usse case 1 --> with formcontrols inside an array
    // let users = new FormArray([
    //   new FormControl('ARC'),
    //   new FormControl('tutorials')
    // ])

    // console.log(users)
    // console.log(users.value)


    this.addLoanTypeForm = this.fb.group({
      loanName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]
      ),
      laonType: new FormControl('', Validators.required),
      loanDescription: new FormControl('', Validators.compose([
      ])),
      //with form control
    //  'users': new FormArray([
    //   new FormControl(),
    //   new FormControl()
    //  ])
    // with form group
    users: new FormArray([
      this.fb.group({
        'name': new FormControl(''),
        'age': new FormControl(''),
        'dept': new FormControl('')
      })
    ])

  })


  // let newLoanObj = {
  //   loanName: 'idfc loan',
  //   laonType: 'electronic loan',
  // }

  // In case of setValue we need to pass object with all fileds/keys if not error will come
  // this.addLoanTypeForm.setValue(newLoanObj) 

  //in patchValue we can set value for required feild
  // this.addLoanTypeForm.patchValue(newLoanObj) 

  // this.addLoanTypeForm.get('laonType')?.valueChanges.subscribe(d=> console.log(d));

  //to track status for entire form
  this.addLoanTypeForm.statusChanges.subscribe(d=> console.log(d))

  // to track status for specific field
  // this.addLoanTypeForm.get('loanName')?.statusChanges.subscribe(d=> console.log(d))
  
  }

  loanTypeForm(){
    // to get total form value
    console.log(this.addLoanTypeForm.value); 

    // to get value for specific control means element means input filed
    // console.log(this.addLoanTypeForm.get('loanName')?.value) 

    // to capture the value changes we need to subscribe

    this.addLoanTypeForm.valueChanges.subscribe(data => {
      // console.log(data)
      // console.log(this.addLoanTypeForm.valid)
      // console.log(this.addLoanTypeForm.invalid)
      // console.log(this.addLoanTypeForm.pending)
      // console.log(this.addLoanTypeForm.pristine)
      // console.log(this.addLoanTypeForm.dirty)
      // console.log(this.addLoanTypeForm.touched)
      // console.log(this.addLoanTypeForm.untouched)
    })
  }

  resetLoanForm(){
    this.addLoanTypeForm.reset()
  }

    // this.addLoanTypeForm.valueChanges.subscribe(d=> console.log(d))
    // this.addLoanTypeForm.get('loanName')?.valueChanges.subscribe(d=> console.log(d));

    get FrmArr() {
      return this.addLoanTypeForm.controls['users'] as FormArray;
    }

    get users(): FormArray {
      return this.addLoanTypeForm.get('users') as FormArray;
    }

    addUser(){
      let userArr = this.users;
      // let userArr = this.addLoanTypeForm.get('users') as FormArray

      let newuser = this.fb.group({
        name: '',
        age: '',
        dept: ''
      })

      userArr.push(newuser);
    }

    removeUser(i: any){
      let arr = this.addLoanTypeForm.get('users') as FormArray;
      arr.removeAt(i)
    }
}

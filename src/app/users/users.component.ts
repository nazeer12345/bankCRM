import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  chaName: string= 'ARC Tutorial'
  cName: string = 'COde with Harry'
  taxVal: number = 200
  usersObj: any
  productList: any
  productImages: any

  constructor( private logservice: LogService, private router: Router){
  }

  ngOnInit(): void {
    // console.log(this.logservice.addNum(1,2))
    // this.logservice.getUsers().subscribe(res => {
    //   // console.log(res)
    //   // this.usersObj = res
    // })

    // this.logservice.getuser().subscribe((res)=>{
      
    // }, err => {
    //   console.log('from user and handeled error in the subsciption', err.error.message)
    // })


    // this.logservice.getProdcuts().subscribe(res =>{
    //   this.productList = res;
    // }, err => console.log(err.error.message) );

    this.logservice.createProduct().subscribe((res)=> {
      console.log('from post method call',res)
    })
  }

  cameFromChild(user: any) {
    console.log(user)
  }

  updatedUsers(event:any){
    console.log('output emitted by child to parent',event)
  }

  // viewUser(id:number){

  //   this.router.navigateByUrl('/users/'+ id)
  // }
}

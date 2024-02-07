
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-valued-users',
  templateUrl: './valued-users.component.html',
  styleUrls: ['./valued-users.component.scss']
})
export class ValuedUsersComponent implements OnInit {

  @Input() channelName!: string
  @Input() channel!: string
  @Input() tax!: number
  @Input() usersData: any
  @Output() sendToParent = new EventEmitter();
  @Output() updatedList = new EventEmitter();

 

  constructor(){}


  ngOnInit(): void {

  }



  userdata(){
    let userobj = {name:'nazeer', age: 30}
    this.sendToParent.emit(userobj)
  }

  updateUsers(){
    let userObj = {name: 'nnnnnnn', age: 25}
    this.updatedList.emit(userObj)

  }

}

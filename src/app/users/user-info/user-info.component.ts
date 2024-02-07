import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent  implements OnInit{
  userId!: number;
  singleUser: any;
  counterVal = 0

  constructor(private apiService: LogService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(userId => {
      this.userId = parseInt(userId['id'])
    });

    this.apiService.getUserById(this.userId).subscribe(user=>{
      this.singleUser = user
    })
   
  }

 
}

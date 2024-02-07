import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {
  counterVal = 0
  TimeInterval!: any

constructor(private httpService: LogService) {}

  ngOnInit(): void {
    this.httpService.getUserData().subscribe(data => {
      console.log(data)
    })
  }

  startCount(){
    // this.TimeInterval = setInterval(()=>{this.counterVal++}, 1000 )
  }

  clearIntaval() {
    // setTimeout(() => {
    //   clearInterval(this.TimeInterval)
    // }, 1000);
    // 
    // this.counterVal = 0
  }
}

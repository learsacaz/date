import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'DATE';
  public maxDate:any;
  public dateNow:string = '0000-00-00';
 
  constructor() {
    this.maxDate = Date.now();
    let dateObj = new Date();
    let month = dateObj.getMonth() + 1; //months from 1-12
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    this.maxDate = `${year}-0${month}-0${day}`;
    console.log(this.maxDate);
  }
  
  public catchCalendarValue(ev: any) {
    this.dateNow=ev.target.value;
    console.log(ev.target.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageserviceService } from 'src/app/storageservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
 
a:any;
constructor(private routes:Router,private fb:FormBuilder,private _storage:StorageserviceService){
this._storage.inlogin(true)
var myDate = new Date();
var hrs = myDate.getHours();

var greet;
if(hrs<12){
  greet="GOOD MORNING"
}
else if (hrs >= 12 && hrs < 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';


  this.a=greet
console.log(this.a)
 
}
  ngOnInit(): void {
    
  }
  about(){
    
  }

 
}

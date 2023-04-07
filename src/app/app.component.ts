import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageserviceService } from './storageservice.service';
import { userlogin } from './Models/userfill';
import { HomepageComponent } from './authmodule/homepage/homepage.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employeeleave';
  inlogin:boolean=true;
  b:any;
  c:any;
 
  

  constructor(private fb:FormBuilder,private routes:Router,private activateroute:ActivatedRoute ,private _storage:StorageserviceService,private dialog:MatDialog){
//  this.b=localStorage.getItem('datas')
//  console.log(this.b.username)
  }
  ngOnInit() {
    this._storage.loginValueEmitter.subscribe((value)=>{
      this.inlogin=value;
      
      this.b=localStorage.getItem('datas')
      this. c=(JSON.parse(this.b))
       console.log(this.c)
    
     
    })
  }
  openDialog(){
    this.dialog.open(HomepageComponent)
  }
  fnof(){
    if(navigator.share){
      navigator.share({
        title:'My copied link here',
        url:"http://localhost:4200/dashboardmodule/dashboard"
      }).then(()=>{
        console.log('Thanks for sharing!');
      })
    
      
    }
  }
}


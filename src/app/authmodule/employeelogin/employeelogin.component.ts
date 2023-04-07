import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageserviceService } from 'src/app/storageservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.scss']
})
export class EmployeeloginComponent implements OnInit{
 registration!: FormGroup;
  captcharesponse: string | undefined;
 
  constructor(private fb:FormBuilder,private router:Router,private _storage:StorageserviceService,private _http:HttpClient){
 this._storage.inlogin(false)
  
   
  }
  ngOnInit(): void {
    this.registration=this.fb.group({
      username:"",
      password:"",
      captcha:""
    })
    
  }
  submit(){
    this._storage.userfill(this.registration.value)
.subscribe({
  next:(c)=>{  this.router.navigate(['/dashboardmodule/dashboard'])
  console.log(c)
localStorage.setItem('datas',JSON.stringify(c))
 
    
  },
  error:(err)=>{
    alert("Invalid user")
  }
})
  }
  public resolved(captchaResponse: string) { 
    this.captcharesponse = captchaResponse;
    console.log(`Resolved captcha with response: ${captchaResponse}`); 
    }

}

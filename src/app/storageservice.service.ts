import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {
  
  loginValueEmitter=new Subject<boolean>();
  
  url:string="https://localhost:7150/api"

  constructor(private _http:HttpClient) {

   }
   inlogin(val:any){
    this.loginValueEmitter.next(val)
   }
   userfill(userfill:any){
    return this._http
    .post(this.url+'/User/Authenticate/authenticate',userfill)

   }
}

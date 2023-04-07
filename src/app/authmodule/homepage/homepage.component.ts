import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { StorageserviceService } from 'src/app/storageservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  aboutinfo!: FormGroup;
  b: any;
  c: any;
  constructor(private _http:HttpClientModule,private _storage:StorageserviceService,private router:Router){
 this._storage.inlogin(true)
  }
  ngOnInit(): void {
    this.b=localStorage.getItem('datas')
    this. c=(JSON.parse(this.b))
     console.log(this.c)
  }
  close(){
    this.close
  }
}

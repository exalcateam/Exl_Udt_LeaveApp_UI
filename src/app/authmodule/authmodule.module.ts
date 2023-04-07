import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { RouterModule, Routes } from '@angular/router';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { RecaptchaModule } from "ng-recaptcha";
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[{
  path:'homepage',
  component:HomepageComponent
},
{
 path:'employeelogin',
 component:EmployeeloginComponent
},
{
 path:'managerlogin',
 component:ManagerloginComponent
},{
  path:'',
  redirectTo:'employeelogin',
  pathMatch:'full'
}]

@NgModule({
  declarations: [
    HomepageComponent,
    EmployeeloginComponent,
    ManagerloginComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
     MatFormFieldModule,
     MatCardModule,
     RecaptchaModule,
     ReactiveFormsModule,
     MatInputModule,
     MatButtonModule,
     MatRadioModule,
     MatIconModule,
     HttpClientModule,
   
    
    
  ]
})
export class AuthmoduleModule { }

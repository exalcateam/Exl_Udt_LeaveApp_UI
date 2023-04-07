import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { LeaveapplyComponent } from './leaveapply/leaveapply.component';


const routes: Routes=[{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'leaveapply',
  component:LeaveapplyComponent
},
{
  path:'',
  redirectTo:'dashboard',
  pathMatch:'full'
}]
@NgModule({
  declarations: [
    DashboardComponent,
    LeaveapplyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
 MatDialogModule ,

    
    


    
  ]
})
export class DashboardmoduleModule { }

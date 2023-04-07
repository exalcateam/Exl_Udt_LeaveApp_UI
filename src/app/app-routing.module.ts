import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path:'authmodule',
  loadChildren:()=>import ("./authmodule/authmodule.module").then(m=>m.AuthmoduleModule)
},{
  path:'dashboardmodule',
  loadChildren:()=>import ("./dashboardmodule/dashboardmodule.module").then(m=>m.DashboardmoduleModule)
},{
  path:'',
  redirectTo:'authmodule',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }

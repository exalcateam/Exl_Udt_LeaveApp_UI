import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthmoduleModule } from './authmodule/authmodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthmoduleModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
 NgImageSliderModule ,
MatCardModule ,
MatDatepickerModule,
MatNativeDateModule,
MatInputModule,
MatDialogModule






    

 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

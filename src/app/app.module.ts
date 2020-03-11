import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationComponent } from './station/station.component';
import { HttpClientModule  } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FromstationComponent } from './fromstation/fromstation.component';
import { MatButtonModule } from '@angular/material/button';
import { ArrivalComponent } from './arrival/arrival.component';
import { FromArrComponent } from './from-arr/from-arr.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { SelectDepartureComponent } from './select-departure/select-departure.component';
import { SelectArrivalComponent } from './select-arrival/select-arrival.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { ShowAllComponent } from './show-all/show-all.component';




@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    FromstationComponent,
    ArrivalComponent,
    FromArrComponent,
    AlertComponent,
    SelectDepartureComponent,
    SelectArrivalComponent,
    NavbarComponent,
    TitleComponent,
    ShowAllComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

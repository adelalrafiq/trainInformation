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

 


@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    FromstationComponent,
    ArrivalComponent,
    FromArrComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

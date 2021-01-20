import { AlertComponent } from './../alert/alert.component';
import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';

import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  station: string;
  departure: any;
  platform: any;  
}

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  
  isDialogOpen=false;
  
 
  displayedColumns: string[] = ['station', 'departure','platform'];
  dataSource = [];
  dataSource_arr = [];

  title = 'Train Information';
  result:any;
  trainInformation:any; 

  constructor(private call:ApidataService,public dialog: MatDialog) { }
  
  ngOnInit(): void {
 
  }

  //call api
  callAPI(){
    const info = timer(0,60000);
    info.pipe(switchMap(()=>
    this.call.getPosts()
    ))
    .subscribe(
      next=>{
        
        if(this.isDialogOpen = true){
          this.closeDialog();
        }
        console.log(next);
        this.trainInformation = next;
        this.dataSource=[
          {station: this.trainInformation.connection[0].departure.station,
           departure: this.trainInformation.connection[0].departure.time,
           platform: this.trainInformation.connection[0].departure.platform           
          }];
          this.dataSource_arr=[
            {station: this.trainInformation.connection[0].arrival.station,
             arrival: this.trainInformation.connection[0].arrival.time,
             platform: this.trainInformation.connection[0].arrival.platform           
            }]
            const now = Date.now();
            const sec = 1000;
            const min = sec * 60;
            const current = Math.floor(now / min);
             console.log(this.dataSource[0].departure / 60);
             console.log(current);
             
             
      if(current === Math.floor(this.dataSource[0].departure / 60)){
        this.openDialog();
     
}
          
      },
      error=>{
        console.log(error);
      },
    )  
  }

  openDialog() {
    this.dialog.open( AlertComponent );

  }

  closeDialog(){
    this.dialog.closeAll( );
  }
  
   
}


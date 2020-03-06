import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  
    

  displayedColumns: string[] = ['station', 'departure','platform'];
  dataSource = [];
  dataSource_arr = [];

  title = 'Train Departure';
  result:any;
  trainInformation:any; 

  constructor(private call:ApidataService) { }
  
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


      },
      error=>{
        console.log(error);
      },
    )  
  }
}

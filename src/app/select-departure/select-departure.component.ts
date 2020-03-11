import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { timer } from 'rxjs';
import { switchMap, withLatestFrom, tap, startWith } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
  station: string;
  departure: any;
  platform: any;
  
}

@Component({
  selector: 'app-select-departure',
  templateUrl: './select-departure.component.html',
  styleUrls: ['./select-departure.component.css']
})
export class SelectDepartureComponent implements OnInit {
  displayedColumns: string[] = ['station', 'departure','platform'];
  dataSource = [];
  dataSource_arr = [];

  title = 'Train Information';
  result:any;
  fromStation: any;
  toStation:any; 
  trainInformation:any;

  form = new FormGroup({
  from: new FormControl('', [Validators.required]),
  to: new FormControl('', [Validators.required]),
  })
  stations$ = this.call.getAllStations()
  constructor(private call:ApidataService) { }

  ngOnInit(): void {
  }

  //callAPI
  callAPI(from,to){
    timer(0,60000).pipe(
      withLatestFrom(this.form.valueChanges.pipe(startWith(this.form.value))),
      switchMap(([,formValue])=> this.call.getPostsFrom(formValue.from,formValue.to)))
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

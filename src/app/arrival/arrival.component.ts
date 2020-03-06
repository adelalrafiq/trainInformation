import { Component, OnInit, Input } from '@angular/core';


export interface PeriodicElement {
  station: string;
  arrival: any;
  platform: any;  
}
@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent implements OnInit {
 
  displayedColumns: string[] = ['station', 'arrival','platform'];
  @Input() dataSource = [];
  

  title = 'Train Arrival';
  result:any;
  trainInformation:any; 

  constructor() { }
  
  ngOnInit(): void {
   
  }

}
 
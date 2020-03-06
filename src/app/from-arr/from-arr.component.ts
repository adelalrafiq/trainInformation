import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  station: string;
  arrival: any;
  platform: any; 
} 
@Component({
  selector: 'app-from-arr',
  templateUrl: './from-arr.component.html',
  styleUrls: ['./from-arr.component.css']
})
export class FromArrComponent implements OnInit {

  displayedColumns: string[] = ['station', 'arrival','platform'];
  @Input() dataSource  = [];
  

  title = 'Train Arrival';
  result:any;
  trainInformation:any; 
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-arrival',
  templateUrl: './select-arrival.component.html',
  styleUrls: ['./select-arrival.component.css']
})
export class SelectArrivalComponent implements OnInit {

  displayedColumns: string[] = ['station', 'arrival','platform'];
  @Input() dataSource  = [];
  

  title = 'Train Arrival';
  result:any;
  trainInformation:any;
  constructor() { }

  ngOnInit(): void {
  }

}

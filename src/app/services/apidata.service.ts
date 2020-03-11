import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

 /*  private message = new Subject<any>(); */

  constructor(private http: HttpClient) { }

  //call api
   getPosts(){
    return this.http.get('http://api.irail.be/connections/?from=Gent-Dampoort&to=Sint-Niklaas&format=json');
  }

  getPostsFrom(from, to){
    console.log(from, to)
    return this.http.get(`http://api.irail.be/connections/?from=${from}&to=${to}&format=json`);
  }
  getAllStations(): Observable<any>{
    return this.http.get('http://api.irail.be/stations/?format=json&lang=en').pipe(pluck('station'))
  }  
}
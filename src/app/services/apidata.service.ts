import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';

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

  /* getPostsSelect({ fromStation, toStation }: { fromStation; toStation; }){
    console.log(fromStation, toStation)
    return this.http.get(`http://api.irail.be/connections/?from=${fromStation}&to=${toStation}&format=json`);
  } */

  /* getMessage(): Observable<any> {
    return this.message.asObservable();
  } */

  
}
 



/* @Injectable()
export class MessageService {
  private message = new Subject<any>();
  constructor() { }
  // the type can be used in case you want to classify the alert
  sendMessage(message: string, type = 1) { 
     this.message.next({text: message, type: type});
  }
  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
  clearMessage() {
    this.message.next();
  }
} */
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) { }

  //call api
   getPosts(){
    return this.http.get('http://api.irail.be/connections/?from=Gent-Dampoort&to=Sint-Niklaas&format=json');
  }
 
  getPostsFrom(from, to){
    console.log(from, to)
    return this.http.get(`http://api.irail.be/connections/?from=${from}&to=${to}&format=json`);
  }
}

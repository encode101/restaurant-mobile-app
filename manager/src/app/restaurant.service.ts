import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  
  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:1337';

  getConfig() {
    return this.http.get(this.configUrl+"/restaurant");
    //return ("Here I am")
  }
}

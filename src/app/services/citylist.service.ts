import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitylistService {

  constructor(
    private http: HttpClient) { }

    getCities() {
      return this.http.get("https://api.covid19india.org/data.json");
    }
}

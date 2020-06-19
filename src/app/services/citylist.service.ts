import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitylistService {

  constructor(
    private http: HttpClient) { }

    getCities(): Observable<any> {
      return this.http.get<any>("https://api.covid19india.org/state_district_wise.json");
    }
}

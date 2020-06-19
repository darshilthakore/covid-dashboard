import { Component, OnInit } from '@angular/core';
import { CitylistService } from '../services/citylist.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {

  metro = ['Ahmedabad', 'Kolkata', 'Pune', 'Mumbai', 'New Delhi', 'Hyderabad']
  metroData = {}
  constructor(
    private citylistService: CitylistService) { }

  ngOnInit(): void {
    this.getCities();

  }

  getCities() {
    this.citylistService.getCities().subscribe(
      response => {
        // console.log(response);
        
        for (var x in response) {
          // console.log(response[x].districtData);
          for (var district in response[x].districtData) {
            // console.log(district);
            if ( this.metro.includes(district) ) {
              // console.log(response[x].districtData[district]);
              this.metroData[district] = response[x].districtData[district];
              // console.log(this.metroData);
            }
          }
        }
      }
    )
    console.log(this.metroData);
  }

} 

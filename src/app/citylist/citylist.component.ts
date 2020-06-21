import { Component, OnInit } from '@angular/core';
import { CitylistService } from '../services/citylist.service';
import { Citydetails } from '../shared/citydetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {

  metro = ['Ahmedabad', 'Kolkata', 'Pune', 'Mumbai', 'New Delhi', 'Hyderabad', 'Chennai', 'Surat'] //predefined metro cities
  metroData= [];
  
  constructor(
    private citylistService: CitylistService, //service for retreiving api
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getCities();

  }


  // filtering the list of metro cities from the retrieved api data after subscribing to the observable
  
  getCities() {
    this.citylistService.getCities().subscribe(
      response => {    
        // console.log("Response: ", response);    
        for (var state in response) {
          for (var district in response[state].districtData) {
            if ( this.metro.includes(district) ) {
              console.log(district);
              // this.metroData.push({ [district]: response[state].districtData[district]});
              let citydetails = new Citydetails();
              var data = response[state].districtData[district];
              citydetails.active = data['active'];
              citydetails.city = district;
              citydetails.confirmed = data['confirmed'];
              citydetails.recovered = data['recovered'];
              citydetails.deceased = data['deceased'];
              citydetails.delta = data['delta'];
              this.metroData.push(citydetails);
            }
          }
        }
      }
    )
    console.log(this.metroData);
  }

  //on clicking the grid for the city, selected city's analysis screen will be rendered
  goTo(city) {
    console.log("Selected city:", city);
    this.router.navigate(['/citydetail'], {queryParams: {'city': JSON.stringify(city)}});
  }

} 

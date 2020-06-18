import { Component, OnInit } from '@angular/core';
import { CitylistService } from '../services/citylist.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {

  constructor(
    private citylistService: CitylistService) { }

  ngOnInit(): void {
    this.getCities();

  }

  getCities() {
    this.citylistService.getCities().subscribe(
      response => {
        console.log(response);
      }
    )
  }

} 

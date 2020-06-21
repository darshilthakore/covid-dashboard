import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Citydetails } from '../shared/citydetails';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, scan } from 'rxjs/operators';
import { Chart } from 'chart.js';
// import * as Chart from 'chart.js';


@Component({
  selector: 'app-citydetail',
  templateUrl: './citydetail.component.html',
  styleUrls: ['./citydetail.component.scss']
})
export class CitydetailComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  public context: CanvasRenderingContext2D;

  chart: Chart;
  citydetails: Citydetails;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe( params => {
        console.log("Data: ", JSON.parse(params['city']));
        this.citydetails = JSON.parse(params['city']);
        

      });
    
    // this.createChart();
      
  }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(this.context, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor: ["#3498db","#95a5a6","#9b59b6"],
          data: [this.citydetails.active, this.citydetails.recovered, this.citydetails.deceased]
        }],
        labels: [
          'Active',
          'Recovered',
          'Deceased'
        ]
      }
    });

  }

  // createChart(dabba) {
    
  //   this.chart = new Chart(dabba, {
  //     type: 'pie',
  //     data: {
  //       datasets: [{
  //         backgroundColor: ["#3498db","#95a5a6","#9b59b6"],
  //         data: [this.citydetails.active, this.citydetails.recovered, this.citydetails.deceased]
  //       }],
  //       labels: [
  //         'Active',
  //         'Recovered',
  //         'Deceased'
  //       ]
  //     }
  //   });
  // }


}

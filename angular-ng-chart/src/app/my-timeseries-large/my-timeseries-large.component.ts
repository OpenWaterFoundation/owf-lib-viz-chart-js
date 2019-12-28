import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
// import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import waitForPapaParse from 'wait-for-papa-parse';
import 'chartjs-plugin-zoom';
// import hammer from 'angular-hammer';
// import { timer } from 'rxjs';
// import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-my-timeseries-large',
  templateUrl: './my-timeseries-large.component.html',
  styleUrls: ['./my-timeseries-large.component.css']
})
export class MyTimeseriesLargeComponent implements OnInit {
  // csvContent: string;
  // parsedCsv: string[][];

  constructor(private papa: Papa) { }

  isDataAvaliable:boolean = false;
  public chartType;
  public chartOptions;
  public chartLabels;
  public chartLegend;
  public chartData;

  ngOnInit() {
    $.ajaxSetup({
      async: false  // tells ajax functions to wait
    });
    var _this = this;
    var chartData;
    $.get('assets/large_test_data.csv', async function(data) {
      chartData = await waitForPapaParse(data);
      _this.chartType = 'line';

      var labelsArray = [];
      var line1 = [];
      var line2 = [];
      var line3 = [];
      var min_time;
      var max_time;
      for(var i = 1; i < chartData['data'].length; i++){
        labelsArray[i-1] = new Date(chartData['data'][i][0]);
        line1[i-1] = chartData['data'][i][1];
        line2[i-1] = chartData['data'][i][2];
        line3[i-1] = chartData['data'][i][3];
      }
      min_time = labelsArray[1];
      max_time = labelsArray[labelsArray.length -1];
      // console.log(min_time);
      // console.log(max_time);      
      // console.log(line1);
      // console.log(labelsArray);
      _this.chartLabels = labelsArray;
      _this.chartLegend = true;
      
      _this.chartData = [
        {
          fill: false,
          label: chartData['data'][0][1],
          data: line1,
          borderColor: '#800080',
          backgroundColor: '#800080',
          lineTension: 0
        },
        {
          fill: false,
          label: chartData['data'][0][2],
          data: line2,
          borderColor: '#5c9da3',
          backgroundColor: '#5c9da3',
          lineTension: 0
        },
        {
          fill: false,
          label: chartData['data'][0][3],
          data: line3,
          borderColor: '#009933',
          backgroundColor: '#009933',
          lineTension: 0
        }
      ];
      _this.chartOptions = {
        fill: false,
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
              onPan: function({chart}) { console.log(`I'm panning!!!`); }
            },
            zoom: {
              enabled: true,
              mode: 'x',
              onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
              // drag: true
            }
          },
        },
        // plugins: {
          // zoom: {
            // pan: {
            //   enabled: true,
            //   mode: 'x',
            //   speed: 10,
            //   threshold: 10,
            //   // rangeMin: {
            //   //   x: null,
            //   //   y: null
            //   // },
            //   // ramgeMax: {
            //   //   x: null,
            //   //   y: null
            //   // }
            //   onPan: function({chart}) { console.log(`I'm panning!!!`); }
            // },
            // zoom: {
            //   speed: 0.1,
            //   onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
            //   enabled: true,
            //   // drag: true,
            //   mode: 'x'
            // },
          // }
        // },
        responsive: true,
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear',
            // bounds: 'ticks',
            // ticks: {
            //   beginAtZero: false,
            // },
            time:{
              min: min_time,
              max: max_time,
              // format: getLocaleDateTimeFormat,
              tooltipFormat: 'MM/DD/YYYY'
              // unit: 'year',
              // displayFormats: 'll'
            },
            // distribution: 'linear',
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Date",
            }
            // ticks: {
            //   maxRotation: 0
            // }
        }],
          yAxes: [{
            // ticks: {
            //   beginAtZero: true,
            // },
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Page Views",
            }
          }]
        }
    };
      _this.isDataAvaliable = true;
    });
  }

  // public chartData = [
  //   {
  //     fill: false,
  //     label: 'Page Views',
  //     data: [280, 250, 340, 100, 150, 78, 300, 312],
  //     // }, {
  //     //   // x: new Date("2017-08-19T00:00:00-06:00"), 
  //     //   // y: 250
  //     // }, {
  //     //   // x: new Date("2017-08-20T00:00:00-06:00"), 
  //     //   // y: 280
  //     // }, {
  //     //   // x: new Date("2017-08-21T00:00:00-06:00"), 
  //     //   // y: 250
  //     // }, {
  //     //   // x: new Date("2017-08-22T00:00:00-06:00"), 
  //     //   // y: 300
  //     // }, {
  //     //   // x: new Date("2017-08-23T00:00:00-06:00"), 
  //     //   // y: 200
  //     // }],
  //     borderColor: '#800080',
  //     backgroundColor: '##800080',
  //     lineTension: 0
  //   },
  //   {
  //     fill: false,
  //     label: 'Purchases',
  //     data: [40, 100, 23, 40, 50, 70, 30, 33],
  //     borderColor: '#5c9da3',
  //     backgroundColor: '#5c9da3',
  //     lineTension: 0
  //   }
  // ];

}

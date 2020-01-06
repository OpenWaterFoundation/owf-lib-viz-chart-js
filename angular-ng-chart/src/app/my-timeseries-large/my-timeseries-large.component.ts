import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

import { Papa } from 'ngx-papaparse';
import waitForPapaParse from 'wait-for-papa-parse';
import 'chartjs-plugin-zoom';
// import hammer from 'angular-hammer';

@Component({
  selector: 'app-my-timeseries-large',
  templateUrl: './my-timeseries-large.component.html',
  styleUrls: ['./my-timeseries-large.component.css']
})
export class MyTimeseriesLargeComponent implements OnInit {

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
        responsive: true,
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear',
            time:{
              /* For the zoom and pan to work on the timeseries charts
              there must be a min and max set */
              min: min_time,
              max: max_time,
              tooltipFormat: 'MM/DD/YYYY'
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Date",
            }
        }],
          yAxes: [{
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

}

import { Component, OnInit } from '@angular/core';
import 'chartjs-plugin-zoom';

@Component({
  selector: 'app-my-timeseries-chart',
  templateUrl: './my-timeseries-chart.component.html',
  styleUrls: ['./my-timeseries-chart.component.css']
})
export class MyTimeseriesChartComponent implements OnInit {
  public barChartOptions = {
    fill: false,
      plugins: {
        zoom: {
          pan: {
            enabled: true,
            mode: 'x'
          },
          zoom: {
            enabled: true,
            mode: 'x',
            // drag: true
          }
        },
      },
      responsive: true,
      scales: {
      //   xAxes: [{
      //     type: 'time',
      //     time:{
      //       // unit: 'day',
      //       displayFormats: 'll'
      //     },
      //     distribution: 'linear',
      //     display: true,
      //       scaleLabel: {
      //         display: true,
      //         labelString: "Date",
      //       }
      // }],
      xAxes: [{
        type: 'time',
        distribution: "linear",
        display: true,
        time: {
          min: new Date("2017-08-16"),
          max: new Date("2017-08-23"),
          tooltipFormat: 'MM/DD/YYYY'
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Page Views",
        }
      }]
    }
  };

  // public barChartLabels = ["2017-08-16", "2017-08-17", "2017-08-18", "2017-08-19", "2017-08-20", "2017-08-21", "2017-08-22", "2017-08-23"];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {
      fill: false,
      label: 'Page Views',
      data: [{
        x: new Date("2017-08-16"),
        y: 280
      },{
        x: new Date("2017-08-17"),
        y: 250
      },{
        x: new Date("2017-08-18"),
        y: 340
      },{
        x: new Date("2017-08-19"),
        y: 100
      },{
        x: new Date("2017-08-20"),
        y: 150
      },{
        x: new Date("2017-08-21"),
        y: 78
      },{
        x: new Date("2017-08-22"),
        y: 300
      },{
        x: new Date("2017-08-23"),
        y: 312
      }],
      // }, {
      //   // x: new Date("2017-08-19T00:00:00-06:00"), 
      //   // y: 250
      // }, {
      //   // x: new Date("2017-08-20T00:00:00-06:00"), 
      //   // y: 280
      // }, {
      //   // x: new Date("2017-08-21T00:00:00-06:00"), 
      //   // y: 250
      // }, {
      //   // x: new Date("2017-08-22T00:00:00-06:00"), 
      //   // y: 300
      // }, {
      //   // x: new Date("2017-08-23T00:00:00-06:00"), 
      //   // y: 200
      // }],
      borderColor: '#fe8b36',
      backgroundColor: '#fe8b36',
      lineTension: 0
    },
    {
      fill: false,
      label: 'Purchases',
      data: [{
        x: new Date("2017-08-16"),
        y: 40
      },{
        x: new Date("2017-08-17"),
        y: 100
      },{
        x: new Date("2017-08-18"),
        y: 23
      },{
        x: new Date("2017-08-19"),
        y: 40
      },{
        x: new Date("2017-08-20"),
        y: 50
      },{
        x: new Date("2017-08-21"),
        y: 70
      },{
        x: new Date("2017-08-22"),
        y: 30
      },{
        x: new Date("2017-08-23"),
        y: 33
      }],
      borderColor: '#5c9da3',
      backgroundColor: '#5c9da3',
      lineTension: 0
    }
  ];

  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

  constructor() { }

  ngOnInit() {
  }

}

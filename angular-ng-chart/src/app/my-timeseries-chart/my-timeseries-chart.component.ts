import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timeseries-chart',
  templateUrl: './my-timeseries-chart.component.html',
  styleUrls: ['./my-timeseries-chart.component.css']
})
export class MyTimeseriesChartComponent implements OnInit {
  public barChartOptions = {
    fill: false,
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time:{
            unit: 'day'
          },
          distribution: 'linear',
          display: true,
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

  // public barChartLabels = ["2017, 08, 16", "2017, 08, 17", "2017, 08, 18"];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [{
    fill: false,
    label: 'Page Views',
    data: [{
      x: new Date("2017-08-16T00:00:00-06:00"),
      y: 280
    }, {
      x: new Date("2017-08-17T00:00:00-06:00"), 
      y: 250
    }, {
      x: new Date("2017-08-18T00:00:00-06:00"),
      y: 340
    }, {
      x: new Date("2017-08-19T00:00:00-06:00"), 
      y: 250
    }, {
      x: new Date("2017-08-20T00:00:00-06:00"), 
      y: 280
    }, {
      x: new Date("2017-08-21T00:00:00-06:00"), 
      y: 250
    }, {
      x: new Date("2017-08-22T00:00:00-06:00"), 
      y: 300
    }, {
      x: new Date("2017-08-23T00:00:00-06:00"), 
      y: 200
    }],
    borderColor: '#fe8b36',
    backgroundColor: '#fe8b36',
    lineTension: 0,
  }];

  

  constructor() { }

  ngOnInit() {
  }

}

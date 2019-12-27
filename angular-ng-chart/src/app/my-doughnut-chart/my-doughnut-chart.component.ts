import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
// import { Hammer } from 'angular-hammer';
import 'chartjs-plugin-zoom';
import 'hammerjs';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {
  // public doughnutChartOptions = {
    // scaleShowVerticalLines: false,
    // responsive: true
  // };

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartType = 'doughnut';
  // public doughnutChartLegend = true;

  public doughnutChartData = [120, 150, 180, 90];

  constructor() { }

  ngOnInit() {  }

}

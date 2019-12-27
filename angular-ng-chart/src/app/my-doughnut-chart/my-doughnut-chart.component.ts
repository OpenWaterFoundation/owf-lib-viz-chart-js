import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// import { Hammer } from 'angular-hammer';
import 'chartjs-plugin-zoom';
import 'hammerjs';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    let myChart = new Chart('mapId', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
                rangeMin: {
                	// Format of min pan range depends on scale type
                  x: null,
                  y: null
                },
                rangeMax: {
                  // Format of max pan range depends on scale type
                  x: null,
                  y: null
                },
                // Function called while the user is panning
                onPan: function({chart}) { console.log(`I'm panning!!!`); },
                // Function called once panning is completed
                onPanComplete: function({chart}) { console.log(`I was panned!!!`); }
              },
              zoom: {
                enabled: true,
                mode: 'x'
              }
            }
          }
      }
    });
    myChart.render();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  };

  public barChartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [12, 19, 3, 5, 2, 3],
      label: '# of Votes',
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
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

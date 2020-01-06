# owf-lib-viz-chart-js
Open Water Foundation demonstration of chart.js library

# Additional Documentation
[Chart.js Site](chartjs.org)

[Chart.js Github](https://github.com/chartjs/Chart.js)

[Chart.js Documentation](https://www.chartjs.org/docs/latest/)

# Basic Chart Setup

### Angular HTML File:
```
<div style="display: block; max-width: 900px; margin-left: auto; margin-right: auto;">
    <canvas baseChart
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [legend]="lineChartLegend"
        [chartType]="lineChartType">
    </canvas>
</div>
```
### Angular Typescript File:
```
public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
};

public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public lineChartType = 'line';
public lineChartLegend = true;

public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];
```
### Plain Javascript and HTMl version:
```
<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: [options]
});
</script>
```

The options for the chart can be found in the chart.js documentation.

For the timeseries charts scrolling and zooming is enabled with chartjs-plugin-zoom. 

To install chartjs-plugin-zoom with npm run the following command:
`npm install chartjs-plugin-zoom`

To use charjs-plugin-zoom in your code add the following in the options section of the chart.
```
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
    }
    },
},
```
The onZoom and onPan functions are optional. They allow you to run a segment of code when the user zooms or pans on the chart.
The mode can be set to `x`, `xy`, or `y` depending on what axis you want the zoom or pan to be on. For more information on 
chartjs-plugin-zoom see the repository on github [here](https://github.com/chartjs/chartjs-plugin-zoom).

Hammerjs can also be installed along with chartjs-plugin-zoom to enable zooming and scrolling on a touchscreen.

To install Hammerjs with npm run the following command:
`npm install hammerjs`

For more information see the Hammerjs documentaion [here](https://hammerjs.github.io/).
Hammerjs is not used in this repository.
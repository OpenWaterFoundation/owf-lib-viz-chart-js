# owf-lib-viz-chart-js
Open Water Foundation demonstration of chart.js library

# Additional Documentation
[Chart.js Site](chartjs.org)

[Chart.js Github](https://github.com/chartjs/Chart.js)

[Chart.js Documentation](https://www.chartjs.org/docs/latest/)

# Basic Chart Setup
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
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyTimeseriesChartComponent } from './my-timeseries-chart/my-timeseries-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyTimeseriesLargeComponent } from './my-timeseries-large/my-timeseries-large.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'timeseries-chart', component: MyTimeseriesChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'large-timeseries-chart', component: MyTimeseriesLargeComponent},
  {path: '**', component: MyBarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

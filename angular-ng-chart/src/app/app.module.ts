import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
// import { chartjsPluginZoom } from 'chartjs-plugin-zoom';
// import { HammerModule } from 'angular-hammer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyTimeseriesChartComponent } from './my-timeseries-chart/my-timeseries-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyTimeseriesLargeComponent } from './my-timeseries-large/my-timeseries-large.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyTimeseriesChartComponent,
    MyDoughnutChartComponent,
    MyTimeseriesLargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    // HammerModule
    // chartjsPluginZoom
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeseriesChartComponent } from './my-timeseries-chart.component';

describe('MyTimeseriesChartComponent', () => {
  let component: MyTimeseriesChartComponent;
  let fixture: ComponentFixture<MyTimeseriesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimeseriesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimeseriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeseriesLargeComponent } from './my-timeseries-large.component';

describe('MyTimeseriesLargeComponent', () => {
  let component: MyTimeseriesLargeComponent;
  let fixture: ComponentFixture<MyTimeseriesLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimeseriesLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimeseriesLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

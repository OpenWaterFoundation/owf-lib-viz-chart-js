import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  private _apiUrl = 'api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';

  dailyForecast() {
  return this._http.get(this._apiUrl)
  .map(result => result)
  .catch( e => { console.log(e); return of(e); });
  }
}

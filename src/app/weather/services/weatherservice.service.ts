import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  getGeoData(geoAPI): Observable<any> {
    return this.http.get(geoAPI)
      .map((response: Response) => {
        return response;
      })
      .catch(this.handleError);
  }
  // handle error for service call
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
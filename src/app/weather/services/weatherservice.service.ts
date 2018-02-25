import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Config } from '../../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }
  getGeoData(lat, lng, count): Observable<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
    let creds = Config.url;
    return this.http.get(creds.baseUrl + "?lat=" + lat + "&lon=" + lng + "&cnt=" + count + "&APPID=" + creds.appId)
      .map((response: Response) => {
        return response;
      })
      .catch(this.handleError);
  }
  // handle error for service call
  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
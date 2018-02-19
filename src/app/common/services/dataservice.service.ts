import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData() : Observable<any>{
  	return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
	 .map((response: Response) =>{
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
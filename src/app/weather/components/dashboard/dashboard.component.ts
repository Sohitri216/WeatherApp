import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/dataservice.service';
import { WeatherService } from '../../services/weatherservice.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	weatherData:any;
	constructor(
		private _httpService: DataService, 
		private geoService: WeatherService
		) {

   }

  ngOnInit() {
  	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError);
	}
	else{
    	console.log("Your browser does not support Geolocation!");
	}
  	this.getData();
  }

	// getGeoAPI(geoAPI) {
	// 	this._geoService.getGeoData(geoAPI).subscribe(data => {
	// 		// this.weatherData = data.query.results;
	// 		console.log('Geo Data:', data);
	// 	},
	// 		err => {
	// 			console.error(err)

	// 		},
	// 		() => console.log('done loading Data'));
	// }

  locationSuccess(position) {
	let lat = position.coords.latitude;
	let lon = position.coords.longitude;
	let appId = '';
	let deg='c'
	console.log('Lat, Long:', lat, lon);

	// let geoAPI = 'http://where.yahooapis.com/geocode?location=' + lat + ',' + lon + '&flags=J&gflags=R&appid=' + appId;

	//  let wsql = 'select * from weather.forecast where woeid=WID and u="' + deg + '"',
	// 	 weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(wsql) + '&format=json&callback=?',
	// 	 code, city, results, woeid;
	// // We will make further requests to Yahoo's APIs here
	//   // this.getGeoAPI(geoAPI)
	//   // debugger;
	//   this.geoService.getGeoData(geoAPI).subscribe(data => {
	// 	  // this.weatherData = data.query.results;
	// 	  console.log('Geo Data:', data);
	//   },
	// 	  err => {
	// 		  console.error(err)

	// 	  },
	// 	  () => console.log('done loading Data'));
	  // this.getGeoAPI(geoAPI);
	}



	locationError(error) {
		switch (error.code) {
			case error.TIMEOUT:
			console.log("A timeout occured! Please try again!");
			break;
			case error.POSITION_UNAVAILABLE:
			console.log('We can\'t detect your location. Sorry!');
			break;
			case error.PERMISSION_DENIED:
			console.log('Please allow geolocation access for this to work.');
			break;
			case error.UNKNOWN_ERROR:
			console.log('An unknown error occured!');
			break;
	}

}


  getData(){
  	this._httpService.getData().subscribe(data=>{
  		this.weatherData=data.query.results;
  		console.log('Weather Data:',this.weatherData);
  	},
  	err=>{
  		console.error(err)

  	},
  	() => console.log('done loading Data'));
  }

}

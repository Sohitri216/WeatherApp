import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weatherservice.service';
import { DatastorageService } from '../../services/datastorage.service';
import { Router } from '@angular/router';
import { Geo, WeatherToday } from './geo';
import { Observable } from 'rxjs/Rx';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as moment from 'moment';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	weatherData: Geo;
	weatherToday: WeatherToday;
	lat: number;
	lng: number;
	constructor(
		private geoService: WeatherService,
		private router: Router,
		private DatastorageService: DatastorageService,
		private ngxService: NgxUiLoaderService
	) { }

	ngOnInit() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.locationSuccess.bind(this), this.locationError);
			this.ngxService.start();
		}
		else {
			console.log("Your browser does not support Geolocation!");
		}
	}

	getCurrentWeather(): any {
		let eachDate: Date;
		let currentDate: Date;
		currentDate = new Date();
		let currentTime = currentDate.getTime();
		let weatherObj: any;
		for (let key in this.weatherData.list) {
			if (this.weatherData.list[key].dt_txt) {
				eachDate = new Date(this.weatherData.list[key].dt_txt);
				if (currentDate.toDateString() === eachDate.toDateString() && (currentTime > eachDate.getTime())) {
					weatherObj = this.weatherData.list[key];
				}
			}
		}
		return weatherObj;
	}

	getGeoAPI(lat: number, lon: number, count: number) {
		console.log('geoAPI:', lat, lon, count);
		this.geoService.getGeoData(lat, lon, count).subscribe((data: Geo) => {
			if (data) {
				this.weatherData = data;
				// this.weatherToday=this.weatherData.list[0];
				this.weatherToday = this.getCurrentWeather();
				this.ngxService.stop();
				console.log('Weather data', this.weatherData);
				console.log('Weather Today', this.weatherToday);
				this.DatastorageService.setData(this.weatherData);
			}

		}, err => {
			console.error(err)

		},
			() => console.log('done loading Data'));
	}



	locationSuccess(position: any) {
		console.log(position, this);
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		this.lat = lat;
		this.lng = lon;
		let count = 10;
		console.log('Lat, Long, count', lat, lon, count);
		this.getGeoAPI(lat, lon, count);
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

	goToDetails() {
		// this.router.navigateByUrl('/details');
		this.router.navigate(['/details', this.lat, this.lng]);
	}

}

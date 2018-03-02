import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/dataservice.service';
import { WeatherService } from '../../services/weatherservice.service';
// import { Temp } from '../../../common/pipes/temp.pipe';
import { Geo, WeatherToday } from './geo';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	weatherData: Geo;
	weatherToday:WeatherToday;
	constructor(
		private _httpService: DataService,
		private geoService: WeatherService
	) { }

	ngOnInit() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.locationSuccess.bind(this), this.locationError);
		}
		else {
			console.log("Your browser does not support Geolocation!");
		}
	}

	getGeoAPI(lat, lon, count) {
		console.log('geoAPI:', lat, lon, count);
		this.geoService.getGeoData(lat, lon, count).subscribe((data: Geo) => {
			if (data) {
				this.weatherData = data;
				this.weatherToday=this.weatherData.list[0];
				console.log('Weather data', this.weatherData);
				console.log('Weather Today',this.weatherToday);
			}

		}, err => {
			console.error(err)

		},
			() => console.log('done loading Data'));
	}



	locationSuccess(position) {
		console.log(position, this);
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
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


	getData() {
		this._httpService.getData().subscribe(data => {
			this.weatherData = data.query.results;
			console.log('Weather Data:', this.weatherData);
		},
			err => {
				console.error(err)

			},
			() => console.log('done loading Data'));
	}

}

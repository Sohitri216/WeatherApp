import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weatherservice.service';
import { DatacommunicationService } from '../../../common/services/datacommunication.service';
import { Geo, WeatherToday } from '../dashboard/geo';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  lat: number = 22.572645;
  lng: number = 88.363892;
  locationChosen: boolean;
  showCard: boolean;
  weatherData: Geo;
  weatherToday: WeatherToday;
  constructor(private geoService: WeatherService, private ngxService: NgxUiLoaderService, private dataCommunicationService:DatacommunicationService) { }


  ngOnInit() {
    this.locationChosen = false;
    this.showCard = false;
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

  onMapClick(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
    this.ngxService.start();
    this.geoService.getGeoData(this.lat, this.lng, 3).subscribe((data: Geo) => {
      this.weatherData = data;
      console.log('weather Data:', this.weatherData);
      this.weatherToday = this.getCurrentWeather();
      this.showCard = true;
      this.ngxService.stop();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weatherservice.service';
import { DatastorageService } from '../../services/datastorage.service';
import { Geo } from '../dashboard/geo';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  weatherData: Geo;
  weatherList: any[] = [];
  city: {
    name: string,
    population :number
  }
  constructor(private route: ActivatedRoute, private router: Router,private DatastorageService:DatastorageService) {
    /**
     * get values from param
     */
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
  ngOnInit() {
    this.weatherData = this.DatastorageService.getData();
    this.city = this.weatherData.city;
    this.weatherList = this.weatherData.list;
    console.log('weather data:', this.weatherList);
    
  }

}

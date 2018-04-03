import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { DataService } from '../common/services/dataservice.service';
import { WeatherService } from './services/weatherservice.service';
import { DatastorageService } from './services/datastorage.service';
import { Temp } from "../common/pipes/temp.pipe";
import * as moment from 'moment';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		DetailsComponent,
		DashboardComponent,
		Temp
	],
	exports: [
		DashboardComponent,
		DetailsComponent
	],
	providers: [
		DataService,
		WeatherService,
		DatastorageService
	]
})
export class WeatherModule { }

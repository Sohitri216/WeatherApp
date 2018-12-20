import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { CustomComponent } from './components/custom/custom.component';
import { DataService } from '../common/services/dataservice.service';
import { WeatherService } from './services/weatherservice.service';
import { DatastorageService } from './services/datastorage.service';
import { Temp } from "../common/pipes/temp.pipe";
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import * as moment from 'moment';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgxUiLoaderModule
	],
	declarations: [
		DetailsComponent,
		DashboardComponent,
		Temp,
		CustomComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { CustomComponent } from './components/custom/custom.component';
import { SearchComponent } from './components/search/search.component';
// import { DataService } from '../common/services/dataservice.service';
import { WeatherService } from './services/weatherservice.service';
import { DatastorageService } from './services/datastorage.service';
import { Temp } from "../common/pipes/temp.pipe";
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HightlightDirective } from '../common/directives/hightlight.directive';
import { StructuralDirective } from '../common/directives/structural.directive';
import { AgmCoreModule } from '@agm/core';
import * as moment from 'moment';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgxUiLoaderModule,
		AgmCoreModule
	],
	declarations: [
		DetailsComponent,
		DashboardComponent,
		Temp,
		CustomComponent,
		HightlightDirective,
		StructuralDirective,
		SearchComponent
	],
	exports: [
		DashboardComponent,
		DetailsComponent
	],
	providers: [
		// DataService,
		WeatherService,
		DatastorageService
	]
})
export class WeatherModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as moment from 'moment';

import { UserModule } from './user/user.module';
import { WeatherModule } from './weather/weather.module';
import { AbstractModule } from './abstract/abstract.module';
import { DatacommunicationService } from './common/services/datacommunication.service';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { Temp } from './common/pipes/temp.pipe';
import { AgmCoreModule } from '@agm/core';
// import { MapDirective } from './common/directives/map.directive';
// import { StructuralDirective } from './common/directives/structural.directive';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // Temp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    WeatherModule,
    NgxUiLoaderModule,
    AbstractModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALpqC1lh1GOZ-utO-3peDsrjDJLpaMpjU'
    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DatacommunicationService, AuthGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
  }
}

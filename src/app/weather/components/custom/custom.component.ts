import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Location } from "@angular/common";
import { HightlightDirective } from '../../../common/directives/hightlight.directive';
import { StructuralDirective } from '../../../common/directives/structural.directive';
import { DatacommunicationService } from '../../../common/services/datacommunication.service';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;
  dummyArr: Array<string>;
  coords: {
    lat: number,
    lon: number
  }
  color = 'orange';
  constructor(private dataService: DatacommunicationService, private location: Location) {
    dataService.setCurrentRouteState(location.path())
  }

  ngOnInit() {
    this.dummyArr = ['The', 'day', 'is', 'cold'];
    this.coords = {
      lat: 22.76,
      lon: 77.2
    }
    let mapProp = {
      center: new google.maps.LatLng(this.coords.lat, this.coords.lon),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);

    let infowindow = new google.maps.InfoWindow({
      content: 'Hey, We are here'
    });
    infowindow.open(this.map, marker);

  }

}

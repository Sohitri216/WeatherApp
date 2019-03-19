import { Directive,ViewContainerRef,TemplateRef, OnInit,ViewChild,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMap]'
})
export class MapDirective implements OnInit {
  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;
  coords: {
    lat: number,
    lon: number
  }

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>,private el: ElementRef) { }
  
  ngOnInit() {
    console.log('in on init');
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
    console.log('map::::::::::', this.map);
    // this.container.createEmbeddedView(this.el.nativeElement);
    this.el.nativeElement.outerHTML = this.map;
    let marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);

    let infowindow = new google.maps.InfoWindow({
      content: 'Hey, We are here'
    });
    infowindow.open(this.map, marker);
  }

}

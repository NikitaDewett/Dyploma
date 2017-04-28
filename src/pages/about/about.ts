import { Component } from '@angular/core';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker,
 Geocoder,
} from '@ionic-native/google-maps';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: GoogleMap;
  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) {

  }
  ngAfterViewInit() {
 this.loadMap();
}
 loadMap(){
 
        let location = new LatLng(-34.9290,138.6010);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });
 
    }
  }

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
import { NativeStorage } from '@ionic-native/native-storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [NativeStorage]
})
export class AboutPage {
  map: GoogleMap;
  images;
  location
  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private nativeStorage: NativeStorage) {
    this.images = []

  }
  ngAfterViewInit() {
 this.loadMap();
}
 loadMap(){
             this.nativeStorage.getItem('favorites').then((data)=>{
      this.images = data
      this.location = new LatLng(this.images[0].lat,this.images[0].long);
      console.log("MAP>>>",this.location)
    })
     let element: HTMLElement = document.getElementById('map');
      let map: GoogleMap = this.googleMaps.create(element);
      map.one(GoogleMapsEvent.MAP_READY).then(() => {console.log('Map is ready!')
            let ionic: LatLng = this.location;
      let position: CameraPosition = {
   target: ionic,
   zoom: 12,
   tilt: 30
      };
  map.moveCamera(position);
  
  let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };
const marker = map.addMarker(markerOptions)
   .then((marker) => {
      marker.showInfoWindow();
    });
 

  
      });



 
        
 

 
    }
  }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/userService';
import { NativeStorage } from '@ionic-native/native-storage';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker,
 Geocoder,
 GeocoderRequest
} from '@ionic-native/google-maps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NativeStorage, Geocoder]
})
export class HomePage {
  private locationId
  private apiResponse;
  public token;
  public next_url;
  public scroll;
  public first_paggination;
  public locationTitle;  

  constructor(public navCtrl: NavController, public UserService: UserService, private nativeStorage: NativeStorage, private geocoder:Geocoder) {
    this.token = '503991026.e029fea.2ce941ad07d446ffb17acd7960372aba'
  }
  
  ionViewDidLoad(){

     this.nativeStorage.getItem("location")
    .then((data)=>{
     var geocoderReq:GeocoderRequest = {address:data}
     this.geocoder.geocode(geocoderReq)
    .then((data)=>{
      let latLng = {lat:'', long:''};
      latLng.lat = data[0].position.lat;
      latLng.long = data[0].position.lng;
      console.log("LatLng>>>", latLng)
      return latLng
    })
    .then(latLng =>{
      this.UserService.getLocationId(latLng.lat, latLng.long, this.token)
    .then((response)=>{
        let locationId
        locationId = response.data[0].id
        console.log('LocationId>>>', locationId)
        return locationId
      })
    .then(locationId =>{
      this.locationId = locationId      
      this.UserService.loadFeed(locationId, this.token).then((data) => {
      this.apiResponse = data.data;
      this.next_url = data.pagination.next_url;
      this.first_paggination = this.next_url
      console.log('FEED IS>>>>', data)
     })
    })
  })
 });
}

  // doRefresh(refresher) {
  //   if (this.scroll== undefined){
  //       this.next_url = this.first_paggination
  //     console.log('refreshing data')
  //   this.UserService.loadFeed(this.locationId, this.token).then((data) => {
  //     this.next_url = data.pagination.next_url
  //   this.apiResponse = data.data;
  //   console.log('refreshing complete')
  //    refresher.complete();
  //   })
  // }
  // else{
  //   this.next_url = this.first_paggination
  //   this.scroll.enable(true)
  //   console.log('refreshing data')
  //   this.UserService.loadFeed(this.locationId, this.token).then((data) => {
  //     this.next_url = data.pagination.next_url
  //     this.apiResponse = data.data;
  //     console.log('refreshing complete')
  //     refresher.complete();
  //   })
  // }

  // }

  doInfinite(infiniteScroll) {
    this.UserService.loadMorePhotos(this.next_url).then((data) => {
        this.next_url = data.pagination.next_url
        console.log('data from MORE photos(infiniteScroll):>>>',data)
        let response = data.data
        this.apiResponse = this.apiResponse.concat(response)
       infiniteScroll.complete();
    })
  }
}





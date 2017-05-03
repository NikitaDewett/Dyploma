import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/userService';
import { NativeStorage } from '@ionic-native/native-storage';
import { ToastController } from 'ionic-angular';
import { Settings } from '../settings/settings';
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
  public favorites:Array<any>; 

  constructor(public navCtrl: NavController, public UserService: UserService, private nativeStorage: NativeStorage, private geocoder:Geocoder, public toastCtrl: ToastController) {
    this.token = '503991026.e029fea.2ce941ad07d446ffb17acd7960372aba';
    this.favorites = [];
  }
  
  ionViewDidLoad(){
  //   var a = localStorage.getItem("location")

  //   //  this.nativeStorage.getItem("location")
  //   // .then((data)=>{
  //    var geocoderReq:GeocoderRequest = {address:a}
  //   //  console.log("location from storage>>", data)
  //    this.geocoder.geocode(geocoderReq)
  //   .then((data)=>{
  //     console.log("location from geocode >>", data)
  //     let latLng = {lat:'', long:''};
  //     latLng.lat = data[0].position.lat;
  //     latLng.long = data[0].position.lng;
  //     console.log("LatLng>>>", latLng)
  //     return latLng
  //   })
  //   .then(latLng =>{
  //     this.UserService.getLocationId(latLng.lat, latLng.long, this.token)
  //   .then((response)=>{
  //       let locationId
  //       locationId = response.data[0].id
  //       console.log('LocationId>>>', locationId)
  //       return locationId
  //     })
  //   .then(locationId =>{
  //     this.locationId = locationId      
  //     this.UserService.loadFeed(locationId, this.token).then((data) => {
  //       this.apiResponse = data.data;
  //       this.next_url = data.pagination.next_url;
  //       this.first_paggination = this.next_url
  //       console.log('FEED IS>>>>', data)
  //    })
  //   })
  // })
//  });
}

  ionViewWillEnter(){
    
    var a = localStorage.getItem("location")

    //  this.nativeStorage.getItem("location")
    // .then((data)=>{
     var geocoderReq:GeocoderRequest = {address:a}
    //  console.log("location from storage>>", data)
     this.geocoder.geocode(geocoderReq)
    .then((data)=>{
      console.log("location from geocode >>", data)
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
myFunction(index){
      let toast = this.toastCtrl.create({
      message: 'Photo was saved successfully',
      duration: 2000,
      position:'middle'
    });
    toast.present();
    let obj = {image: this.apiResponse[index].images.standard_resolution.url,
    lat: this.apiResponse[index].location.latitude,
    long: this.apiResponse[index].location.longitude,
  title:'hello'}
    this.favorites.push(obj)
   localStorage.setItem('favorites', JSON.stringify(this.favorites))
    console.log(this.favorites);
  }
  settingsPage(){
    this.navCtrl.push(Settings);
  }

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





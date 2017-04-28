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

  private apiResponse;
  public token;
  public next_url;
  public scroll;
  public first_paggination;
  public storageLocation;
  

  constructor(public navCtrl: NavController, public UserService: UserService, private nativeStorage: NativeStorage, private geocoder:Geocoder) {
    this.token = '503991026.e029fea.2ce941ad07d446ffb17acd7960372aba'
    this.storageLocation = this.nativeStorage.getItem('initValue').then(data=>console.log(data));
    

  }

  ngOnInit() {


    this.UserService.loadFeed(this.token).then((data) => {
      this.apiResponse = data.data;
      this.next_url = data.pagination.next_url;
      this.first_paggination = this.next_url

      console.log('data is')
      console.log(data)
    })
  }

  doRefresh(refresher) {
    if (this.scroll== undefined){
        this.next_url = this.first_paggination
      console.log('refreshing data')
    this.UserService.loadFeed(this.token).then((data) => {
    this.apiResponse = data.data;
    console.log('refreshing complete')
     refresher.complete();
    })
  }
  else{
    this.next_url = this.first_paggination
    this.scroll.enable(true)
    console.log('refreshing data')
    this.UserService.loadFeed(this.token).then((data) => {
      this.apiResponse = data.data;
      console.log('refreshing complete')
      refresher.complete();
    })
  }

  }

  doInfinite(infiniteScroll) {
    this.scroll = infiniteScroll
    this.UserService.loadMorePhotos(this.next_url).then((data) => {
      if (data.pagination.next_url) {
        this.next_url = data.pagination.next_url
        console.log(data)
        let response = data.data
        console.log(response)
        this.apiResponse = this.apiResponse.concat(response)
        this.scroll.complete();
      }
      else {
        let response = data.data
        this.apiResponse = this.apiResponse.concat(response)
        console.log(data)
        this.scroll.enable(false);
      }
    })
  }

  getLocalValue(){
     this.nativeStorage.getItem('initValue').then(data=>console.log(data));
  }

  // formatLocation(text){
  //   text
  // }




}





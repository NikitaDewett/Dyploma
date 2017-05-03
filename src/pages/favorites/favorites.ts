import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
  providers: [NativeStorage]
})
export class FavoritesPage {
  public images:Array<any>; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {

    //          this.nativeStorage.getItem('favorites').then((data)=>{
    //   this.images = data
    //   console.log("constructor>>>",this.images)
    // })
    this.images = JSON.parse(localStorage.getItem("favorites"))
    console.log('FAV INIT>>',this.images)
  }

  ionViewWillEnter(){
  this.images = JSON.parse(localStorage.getItem("favorites"))
  console.log('WILL ENTER>>>', this.images)
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceInitPage } from '../place-init/place-init';

/*
  Generated class for the Start page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
  
})
export class StartPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToPlaceInit(){
    this.navCtrl.setRoot(PlaceInitPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

}

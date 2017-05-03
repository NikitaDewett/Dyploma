import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
  
  public initValue

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  goToMain(){
    localStorage.setItem('location', this.initValue)
    
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the PlaceInit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-place-init',
  templateUrl: 'place-init.html',
  providers:[NativeStorage]
})
export class PlaceInitPage {
  public initForm: FormGroup
  public initValue

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private nativeStorage: NativeStorage) {

        this.initForm = fb.group({
      'myControl':['', [Validators.required, Validators.minLength(2)]]
    })
  }
  goToMain(){
    this.navCtrl.setRoot(TabsPage);
    localStorage.setItem('location', this.initValue)
    this.nativeStorage.setItem('location',this.initValue)
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
}


  ionViewDidLoad() {

    console.log('ionViewDidLoad PlaceInitPage');
  }

}

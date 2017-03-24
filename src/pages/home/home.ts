import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value:string ='';
  constructor(public navCtrl: NavController) {
    

  }
  setLocal(){
    localStorage.setItem('id', this.value)
    console.log(this.value)
  }



}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value:string ='';
  counter:number = 0;
  constructor(public navCtrl: NavController) {
    

  }
  setLocal(){
    var a = [1,3,4]
    var b = JSON.stringify(a)
    localStorage.setItem('id_'+this.counter, b)
    console.log(JSON.parse(b))
    this.counter++
  }



}

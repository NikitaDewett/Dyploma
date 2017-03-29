import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Instagram } from "ng2-cordova-oauth/core";  
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { UserService } from '../../services/userService';
import { HashPipe } from '../../services/hashPipe';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
    // private oauth: OauthCordova = new OauthCordova();

    // private instagramProvider: Instagram = new Instagram({
    //     clientId: "92c2071decae4edf99df63abe2e6f717",      // Register you client id from https://www.instagram.com/developer/
    //     redirectUri: 'http://localhost',  // Let is be localhost for Mobile Apps
    //     responseType: 'token',   // Use token only 
    //     appScope: ['basic','public_content'] 

        /*
        appScope options are 

        basic - to read a user’s profile info and media
        public_content - to read any public profile info and media on a user’s behalf
        follower_list - to read the list of followers and followed-by users
        comments - to post and delete comments on a user’s behalf
        relationships - to follow and unfollow accounts on a user’s behalf
        likes - to like and unlike media on a user’s behalf

        */ 
    // });

  private apiResponse;
  public token

  constructor(public navCtrl: NavController, public UserService:UserService, public http: Http) {
    this.token = '503991026.92c2071.3ba2f63091584759969b0bb1ea2a80ad'

  }

  ngOnInit(){
         this.UserService.getInstagramUserInfo(this.token).then((data)=>{
          this.apiResponse = data.data;
          console.log('data is')
          console.log(data)
        })
  }
                 
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  }





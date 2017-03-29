import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(public http: Http) {
  }    


  getInstagramUserInfo(response) {
    //GET USER PHOTOS
    return this.http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=' + response + '&count=5')
    .map((res:Response) => { console.log(res); return res.json()}).toPromise();
  }  

}
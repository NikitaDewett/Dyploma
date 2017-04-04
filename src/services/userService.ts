import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(public http: Http) {
  }    


  getInstagramUserInfo(token) {
    //GET USER PHOTOS
    return this.http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=5')
    .map((res:Response) => { console.log(res); return res.json()}).toPromise();
  }

  loadMorePhotos(next_url, token){
    //LOAD MORE PHOTOS, CUZ MAX COUNT FROM FIRST LOAD IS 5 (WE USING PROPERTY NEXT_URL, TO GET NEXT 5 PHOTOS)
    return this.http.get(next_url + token + '&count=5')
    .map((res:Response)=> {return res.json()}).toPromise();

  }  

}
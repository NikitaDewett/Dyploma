import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
 
  constructor(public http: Http) {
  
  }    

 loadFeed(location, token) {
    //GET PHOTOS
    // return this.http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=5')
      return this.http.get('https://api.instagram.com/v1/locations/'+ location +'/media/recent?access_token='+token+'&count=5')
    .map((res:Response) => {return res.json()}).toPromise();
  }

  loadMorePhotos(next_url){
    //LOAD MORE PHOTOS, CUZ MAX COUNT FROM FIRST LOAD IS 5 (WE'RE USING PROPERTY NEXT_URL, TO GET NEXT 5 PHOTOS)
    return this.http.get(next_url)
    .map((res:Response)=> {return res.json()}).toPromise();
  }

  getLocationId(lat, lng, token){
    return this.http.get('https://api.instagram.com/v1/locations/search?lat='+lat+'&lng='+lng+'&access_token='+ token)
    .map((res:Response)=>{return res.json()}).toPromise(); 

  }
  

}
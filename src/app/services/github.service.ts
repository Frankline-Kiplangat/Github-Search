import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username : string;
  private userSecret: "3ec48ad1adb73886d18c92705c8dc9cd782e8ac0";

  constructor(private _http:HttpClient) { 
    this.username= 'Frankline-Kiplangat';
  }

  getProfileDetails(){
    return this._http.get("api.github.com/users/" + this.username + "?user_Secret=")
    // . (res =>res.json());
  }
}

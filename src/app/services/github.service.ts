import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username:string;
private clientSecret ='809541c1141491a44f918d224d651dd01ae87a3a';
  getGithubInfo: any;
  constructor(private http:HttpClient){
    console.log("service is now ready!");
    this.username ='Frankline-Kiplangat';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_secret="+ this.clientSecret)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
private username:string;
  constructor(private http:HttpClient){
    this.username ='Frankline-Kiplangat';
  }
  getProfileInformation(){
    return this.http.get(`https://api.github.com/users/${this.username}?access_token=${environment.apiKey}`)
  }
  getProfileRepos(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${environment.apiKey}`)
  }
  updateUserProfile(username:string){
    this.username = username;
  }
}
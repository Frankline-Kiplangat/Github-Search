import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
private username:string;
private clientId='e51f1b43ea2f3bdd266c';
private clientSecret ='eb259cfd44fa48f477f4b743647832811217805b';
getGithubInfo: any;

  constructor(private http:HttpClient){
    console.log("service works!");
    this.username ='Frankline-Kiplangat';
  }
  getProfileInformation(){
    return this.http.get(`https://api.github.com/users/${this.username}?access_token=${environment.apiKey}`)
  }
  getProfileRepos(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${environment.apiKey}`)
  }
  updateProfile(username:string){
    this.username = username
  //   return this.http.get("https://api.github.com/users/" + this.username + "?clientId=" + this.clientId + "&client_secret=" + this.clientSecret)
  // }
  // getProfileRepos(){
  //   return this.http.get("https://api.github.com/users/" + this.username + "/repos?clientId="+ this.clientId + "&client_secret=" + this.clientSecret)
  // }
  // updateProfile(username:string){
  //   this.username = username;

  }
}
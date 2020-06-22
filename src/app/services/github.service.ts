import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
private username:string;
// private client_Id='e51f1b43ea2f3bdd266c';
private client_Secret ='eb259cfd44fa48f477f4b743647832811217805b';
getGithubInfo: any;

  constructor(private http:HttpClient){
    console.log("service works!");
    this.username ='Frankline-Kiplangat';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username);
  }
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_Id=" + this.client_Secret);
    }
  updateProfile(username:string){
    this.username = username;

  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username:string;
private clientId='e51f1b43ea2f3bdd266c';
private clientSecret ='eb259cfd44fa48f477f4b743647832811217805b';
getGithubInfo: any;
  constructor(private http:HttpClient){
    console.log("service is now ready!");
    this.username ='Frankline-Kiplangat';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_Id=" + this.clientId + "&client_Secret=" + this.clientSecret)
  }
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_Id=" + this.clientId + "&client_Secret=" + this.clientSecret)
    }
  updateProfile(username:string){
    this.username = username;

  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username:string;
// private clientid='dcca90a7bb34f53cf6ee';
private clientsecret ='eb259cfd44fa48f477f4b743647832811217805b';
getGithubInfo: any;
  constructor(private http:HttpClient){
    console.log("service is now ready!");
    this.username ='Frankline-Kiplangat';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_secret="+ this.clientsecret)
  }
}
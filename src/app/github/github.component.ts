import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  
profile:any;
repos: any;
username: string;

constructor(private githubService:GithubService) {
  this.githubService.updateUserProfile(this.username);
    this.githubService.getProfileInformation().subscribe(profile => {
      this.profile = profile;
    });
  
    this.githubService.getProfileRepos().subscribe(repos =>{
      this.repos = repos;
    });

}
  getUserProfile(){
    this.githubService.updateUserProfile(this.username);
    this.githubService.getProfileInformation().subscribe(profile => {
      this.profile = profile;
    });
  
    this.githubService.getProfileRepos().subscribe(repos =>{
      this.repos = repos;
    });
  }

ngOnInit() {
  this.githubService.updateUserProfile('Frankline-Kiplangat');
  this.githubService.getProfileInformation().subscribe(profile => this.profile = profile);
  // this.githubService.getProfileRepos().subscribe(repos =>  this.repos = repos);

}
}
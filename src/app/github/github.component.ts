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
  this.githubService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });

  this.githubService.getProfileRepos().subscribe(repos =>{
    console.log(repos);
    this.repos = repos;
  })
}
  getProfile(){
    this.githubService.updateProfile(this.username);
  }

ngOnInit(): void {
}
}
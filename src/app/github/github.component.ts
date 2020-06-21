import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service'


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
profile:any[];
repositories: any[];


  constructor(private githubService: GithubService) { 
    this.githubService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    });


  }

  ngOnInit() {
  }

}

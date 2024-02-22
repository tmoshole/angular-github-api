import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  username: string = '';
  repoName: string = '';
  repo: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.repoName = params['repo'];
      this.getRepoDetails();
    });
  }

  getRepoDetails() {
    this.githubService.getRepo(this.username, this.repoName)
      .subscribe((data: any) => {
        console.log("Repository details:", data);
        this.repo = data;
      });
  }
}


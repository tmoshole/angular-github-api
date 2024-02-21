import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  username!: string;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this.githubService.getUserDetails(this.username)
      .subscribe((data: any) => {
        this.user = data;
      });
  }
}


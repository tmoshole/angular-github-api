import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-followers',
  standalone: false,
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent implements OnInit {
  username!: string;
  followers!: any[];
  currentPage: number = 1;
  pageSize: number = 7;
  totalFollowers: number = 0;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getFollowers();
    });
  }

  getFollowers() {
    this.githubService.getFollowers(this.username, this.currentPage, this.pageSize)
      .subscribe((followers: any) => {
        this.followers = followers;
        this.totalFollowers = followers;
      }); 
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getFollowers();
  }

  get totalPages(): number {
    return Math.ceil(this.totalFollowers / this.pageSize);
  }
}
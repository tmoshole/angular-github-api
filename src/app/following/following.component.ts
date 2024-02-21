import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-following',
  standalone: false,
  templateUrl: './following.component.html',
  styleUrl: './following.component.css'
})
export class FollowingComponent implements OnInit {
  username!: string;
  following!: any[];
  currentPage: number = 1;
  pageSize: number = 7;
  totalFollowing: number = 0;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getFollowing();
    });
  }

  getFollowing() {
    this.githubService.getFollowing(this.username, this.currentPage, this.pageSize)
      .subscribe((following: any) => {
        this.following = following;
        this.totalFollowing = following;
      }); 
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getFollowing();
  }

  get totalPages(): number {
    return Math.ceil(this.totalFollowing / this.pageSize);
  }
}

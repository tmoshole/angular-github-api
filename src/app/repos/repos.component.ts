import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-repos',
  standalone: false,
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent implements OnInit {
  username!: string;
  repos!: any[];
  currentPage: number = 1;
  pageSize: number = 7;
  totalrepos: number = 0;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getRepos();
    });
  }

  getRepos() {
    this.githubService.getRepos(this.username, this.currentPage, this.pageSize)
      .subscribe((repos: any) => {
        this.repos = repos;
        this.totalrepos = repos;
        console.log("reposssss", repos)
      }); 
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getRepos();
  }

  get totalPages(): number {
    return Math.ceil(this.totalrepos / this.pageSize);
  }
}

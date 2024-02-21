import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-gists',
  standalone: false,
  templateUrl: './gists.component.html',
  styleUrl: './gists.component.css'
})
export class GistsComponent implements OnInit {
  username!: string;
  gists!: any[];
  currentPage: number = 1;
  pageSize: number = 7;
  totalgists: number = 0;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getGists();
    });
  }

  getGists() {
    this.githubService.getGists(this.username, this.currentPage, this.pageSize)
      .subscribe((gists: any) => {
        this.gists = gists;
        this.totalgists = gists;
        console.log("reposssss", gists)
      }); 
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getGists();
  }

  get totalPages(): number {
    return Math.ceil(this.totalgists / this.pageSize);
  }
}


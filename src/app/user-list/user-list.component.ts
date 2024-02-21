import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-user-list',
  styleUrls: ['./user-list.component.css'],
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalUsers: number = 0;

  constructor(
    private githubService: GithubApiService
    ){ }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.githubService.getUsers(this.searchTerm, this.currentPage, this.pageSize)
      .subscribe((users: any) => {
        this.users = users.items;
        this.totalUsers = users.total_count;   
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getUsers();
  }

  get totalPages(): number {
    return Math.ceil(this.totalUsers / this.pageSize);
  }
}

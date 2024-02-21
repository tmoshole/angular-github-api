import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  baseUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUsers(query: string, page: number, perPage: number) {
    const url = `${this.baseUrl}/search/users?q=${query}&page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }

  getUserDetails(username: string) {
    const url = `${this.baseUrl}/users/${username}`;
    return this.http.get(url);
  }

  getFollowers(username: string, page: number, perPage: number) {
    const url = `${this.baseUrl}/users/${username}/followers?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }

  getFollowing(username: string, page: number, perPage: number) {
    const url = `${this.baseUrl}/users/${username}/following?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }

  getRepos(username: string, page: number, perPage: number) {
    const url = `${this.baseUrl}/users/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }

  getGists(username: string, page: number, perPage: number) {
    const url = `${this.baseUrl}/users/${username}/gists?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }

}

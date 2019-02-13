import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { User } from '../../models/User';

export interface SearchResponse {
  total_count: number,
  items: User[]
}

export interface SearchRequest {
  query: string,
  pagination?: {
    pageIndex: number;
    pageSize: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private API = 'https://api.github.com';
  constructor (private http: HttpClient) {}
  
  searchUsers({query, pagination = {pageIndex: 0, pageSize: 25}}: SearchRequest): Observable<SearchResponse> {
    const url = `${this.API}/search/users?q=${query}&page=${pagination.pageIndex + 1}&per_page=${pagination.pageSize}`;

    return this.http.get<SearchResponse>(url);
  }

  getUser(username: string) : Observable<User> {
    const url = `${this.API}/users/${username}`;

    return this.http.get<User>(url);
  }
}

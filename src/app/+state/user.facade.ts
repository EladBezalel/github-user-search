import {ElementRef, Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { PageEvent } from '@angular/material';
import {Observable} from 'rxjs/internal/Observable';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {untilViewDestroyed} from '../utils/untilDestroyed';

import { SearchRequest } from './services/github.service';

import { searchQuery } from './user.selectors';
import { QueryChanged, LoadUsers, PaginationChanged } from './user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  query$ = this.store.select(searchQuery.getQuery);
  users$ = this.store.select(searchQuery.getUsers);
  totalUsers$ = this.store.select(searchQuery.getTotalUsers);
  pagination$ = this.store.select(searchQuery.getPagination);

  constructor(private store: Store<SearchRequest>) {}

  watchQuery(query$:Observable<string>, elRef: ElementRef) {
    query$.pipe(
        debounceTime(250),
        distinctUntilChanged(),
        filter(value => value.length > 2),
        untilViewDestroyed(elRef)
    ).subscribe(this.changeQuery.bind(this));
  }


  changeQuery(query: string) {
    this.store.dispatch(new QueryChanged(query));
  }

  searchUsers() {
    this.store.dispatch(new LoadUsers());
  }

  goToPage(page: PageEvent) {
    this.store.dispatch(new PaginationChanged(page));
  }
}

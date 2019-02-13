import { Action } from '@ngrx/store';
import { User } from '../models/User';
import { SearchResponse } from './services/github.service';
import { PageEvent } from '@angular/material';

export enum SearchActionTypes {
  LoadUsers = '[Search] Load users',
  UsersLoaded = '[Search] Users Loaded',
  UsersLoadError = '[Search] Users load error',
  QueryChanged = '[Search] Query changed',
  PaginationChanged = '[Search] Pagination changed'
}

export class LoadUsers implements Action {
  readonly type = SearchActionTypes.LoadUsers;
}

export class UsersLoaded implements Action {
  readonly type = SearchActionTypes.UsersLoaded;

  constructor(public payload: SearchResponse) {}
}

export class UsersLoadError implements Action {
  readonly type = SearchActionTypes.UsersLoadError;

  constructor(public payload: any) {}
}

export class QueryChanged implements Action {
  readonly type = SearchActionTypes.QueryChanged;

  constructor(public payload: string) {}
}

export class PaginationChanged implements Action {
  readonly type = SearchActionTypes.PaginationChanged;

  constructor(public payload: PageEvent) {}  
}

export type SearchAction = LoadUsers | UsersLoaded | UsersLoadError | QueryChanged | PaginationChanged;

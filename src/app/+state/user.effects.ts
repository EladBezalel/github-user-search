import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap, take, filter, debounceTime } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import {User} from '../models/User';
import {SearchActionTypes, UsersLoaded} from './user.actions';
import { GithubService, SearchRequest, SearchResponse } from './services/github.service';
import { searchQuery } from './user.selectors';


@Injectable()
export class UserEffects {
  state$ = this.store.select(searchQuery.getSearchState);

  constructor(private actions$: Actions, private store: Store<SearchRequest>, private githubService: GithubService) {}

  @Effect()
  loadUsers$ = this.actions$
    .pipe(
      ofType(SearchActionTypes.QueryChanged, SearchActionTypes.PaginationChanged),
      switchMap(() => this.state$.pipe(take(1))),
      mergeMap(state => this.githubService.searchUsers(state)
        .pipe(
          switchMap(
            ({items}) => forkJoin(...this.loadAllDetails(items)),
            ({total_count}, items) : SearchResponse => ({total_count, items})
          ),
          map(payload => new UsersLoaded(payload)),
          catchError(payload => of({ 
            type: SearchActionTypes.UsersLoadError,
            payload
          })),
        )
      )
    );

  private loadAllDetails(items: User[]) {
    return items.map(({login}) => this.githubService.getUser(login));
  }
}

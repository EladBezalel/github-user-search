import { createFeatureSelector, createSelector } from '@ngrx/store';
import {FEATURE_KEY, SearchResult} from './user.reducer';

const getSearchState = createFeatureSelector<SearchResult>(FEATURE_KEY);

const getQuery = createSelector(getSearchState, (state: SearchResult) => state.query);
const getUsers = createSelector(getSearchState, (state: SearchResult) => state.users);
const getPagination = createSelector(getSearchState, (state: SearchResult) => state.pagination);
const getTotalUsers = createSelector(getSearchState, (state: SearchResult) => state.totalUsers);

export const searchQuery = {
  getQuery,
  getUsers,
  getPagination,
  getTotalUsers,
  getSearchState
};

import { SearchActionTypes, SearchAction } from './user.actions';
import { User } from '../models/User';

export const FEATURE_KEY = 'userSearch';

export interface Pagination {
  pageIndex: number,
  pageSize: number
  pageSizeOptions: number[];
}

export interface SearchResult {
  query: string,
  users: User[],
  totalUsers: number,
  pagination: Pagination
}
 
export const initialState : SearchResult = {
  query: '',
  users: null,
  totalUsers: 0,
  pagination: {
    pageIndex: 0,
    pageSize: 4,
    pageSizeOptions: [4, 10, 20, 50, 100]
  }
};
 
export function searchReducer(state = initialState, action: SearchAction) {
  switch (action.type) {
    case SearchActionTypes.UsersLoaded:
      return {
        ...state,
        users: action.payload.items,
        totalUsers: action.payload.total_count
      };
    case SearchActionTypes.UsersLoadError:
      console.error(action.payload)
      return {};
    case SearchActionTypes.QueryChanged:
      return {
        ...state,
        query: action.payload
      };
 
    case SearchActionTypes.PaginationChanged:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pageIndex: action.payload.pageIndex,
          pageSize: action.payload.pageSize
        }
      };
 
    default:
      return state;
  }
}

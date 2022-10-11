import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tab } from '../_models/tab';
import { AccountService } from './account.service';
import { TabParams } from '../_models/tabParams';
import { User } from '../_models/user';
import { map, of, take } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  baseUrl = environment.apiUrl;
  tabs: Tab[] = [];
  user: User;
  tabCache = new Map();
  tabParams: TabParams;

  constructor(private httpClient: HttpClient, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.tabParams = new TabParams();
    });
  }

  getTabParams() {
    return this.tabParams;
  }

  setTabParams(params: TabParams) {
    this.tabParams = params;
  }

  getTabs(tabParams: TabParams) {
    var response = this.tabCache.get(Object.values(tabParams).join('-'));
    if (response) {
      return of(response);
    }

    let params = this.getPaginationHeaders(tabParams.pageNumber, tabParams.pageSize);

    params = params.append('minSkillLevel', tabParams.minSkillLevel.toString());
    params = params.append('maxSkillLevel', tabParams.maxSkillLevel.toString());
    params = params.append('searchString', tabParams.searchString);
    params = params.append('orderBy', tabParams.orderBy);

    return this.getPaginatedResult<Tab[]>(this.baseUrl + 'guitartabs', params).pipe(map(response => {
      this.tabCache.set(Object.values(tabParams).join('-'), response);
      return response;
    }))
  }

  getFavoritedTabs(userId: number) {
    return this.httpClient.get<Tab[]>(this.baseUrl + 'favorite-tabs/' + userId);
  }

  private getPaginatedResult<T>(url, params) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();

    return this.httpClient.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }

  private getPaginationHeaders(pageNumber: number, pageSize: number) {
      let params = new HttpParams();

      params = params.append('pageNumber', pageNumber.toString());
      params = params.append('pageSize', pageSize.toString());

      return params;
    }
}

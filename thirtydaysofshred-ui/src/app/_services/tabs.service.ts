import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tab } from '../_models/tab';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private accountService: AccountService) { }

  getTabs() {
    return this.httpClient.get<Tab[]>(this.baseUrl + 'guitartabs');
  }
}

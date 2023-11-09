import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  FindStockRequest,
  ObjectRecords,
  StockHistory,
  TemplateResponse,
} from './models/StockHistory.model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root',
})
export class StockService {
  apiUrl = 'http://localhost:8080/api/v1/stock/find-hot-stock';
  dummyProject = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) {}

  public get(options?: any) {
    return this.httpClient
      .get('http://localhost:8080/api/v1/test/hi')
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  findStock(request: FindStockRequest): Observable<any> {
    return this.httpClient.post(this.apiUrl, request);
  }

  findProject() {
    return this.httpClient.get(this.dummyProject);
  }
}

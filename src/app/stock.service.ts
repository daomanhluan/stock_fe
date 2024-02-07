import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {FindStockByCodeRequest, FindStockRequest, ObjectRecords, StockCodeRequest, StockHistory, SyncStockRequest, TemplateResponse} from './models/StockHistory.model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class StockService {
  DOMAIN = "http://localhost:8080";
  API_STOCK_BREAK_MA = this.DOMAIN + '/api/v1/stock/find-stock-break-ma';
  API_HOT_STOCK_TODAY = this.DOMAIN + '/api/v1/stock/find-hot-stock-today';
  API_HISTORY_STOCK = this.DOMAIN + '/api/v1/stock/find-stock-by-code';
  API_SYNC_STOCK = this.DOMAIN + '/api/v1/stock/sync-stock-history';
  API_FOLLOW_STOCK = this.DOMAIN + '/api/v1/stock/follow-stock';

  constructor(private httpClient:HttpClient) { }

  public get(options?: any) {
    return this.httpClient.get("http://localhost:8080/api/v1/test/hi").subscribe((response) => { console.log(response); },
    (error) => { console.log(error); });
    }

  findStockBreakMA(request:FindStockRequest):Observable<any>{
    return this.httpClient.post(this.API_STOCK_BREAK_MA, request);
  }

  findHotStockToday(request:FindStockRequest):Observable<any>{
    return this.httpClient.post(this.API_HOT_STOCK_TODAY, request);
  }

  findStockHistoryByCode(request:FindStockByCodeRequest):Observable<any>{
    return this.httpClient.post(this.API_HISTORY_STOCK, request);
  }

  syncAllStockByDate(request:SyncStockRequest):Observable<any>{
    return this.httpClient.post(this.API_SYNC_STOCK, request);
  }

  followStock(request: StockCodeRequest):Observable<any>{
    return this.httpClient.post(this.API_FOLLOW_STOCK, request);
  }
}

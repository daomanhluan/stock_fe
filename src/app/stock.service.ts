import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Product} from '../app/models/Product.model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class StockService {
  apiUrl = 'localhost:8080/api/v1/test/hi';
  constructor(private httpClient:HttpClient) { }


  public get(options?: any) {
    return this.httpClient.get(this.apiUrl, {headers: headers}).subscribe((data:any)=>{
      console.log("OK");
    });
    }
  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl).pipe(
    )
  }
}

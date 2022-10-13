import { Injectable } from '@angular/core';
import {IResponse} from "../models/iresponse";
import {Observable, retry, timeout} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getCinema(page : number): Observable<IResponse[]> {
    let params = new HttpParams();

    params = params.append('$top', 20);
    params = params.append('$skip', 20 * (page - 1));
    params = params.append('api_key', environment.apiKey);
    return this.http.get<IResponse[]>('/api/495/rows', {params : params}).pipe(
      timeout(3000),
      retry(5)
      );
  }

  public getTheaters(page : number): Observable<IResponse[]> {
    let params = new HttpParams();

    params = params.append('$top', 20);
    params = params.append('$skip', 20 * (page - 1));
    params = params.append('api_key', environment.apiKey);
    return this.http.get<IResponse[]>('/api/531/rows', {params : params}).pipe(
      timeout(3000),
      retry(5)
    )
  };

}

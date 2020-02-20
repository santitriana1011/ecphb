import { Injectable } from '@angular/core';

import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class DsepdbService {

  constructor(private _http: HttpClient, private _coreservice: CoreService) { }

  postQuery(table: string, orderData?: any, filters?: string) {
    const URL = `${this._coreservice.urlServicesBD}/${table}`;
    // const URL = `api/${table}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Expose-Headers': '*'
    });
    //return true;
    return this._http.post(URL, orderData, { headers: headers });
  }

  public addService(table: string, objFields: any) {
    return this.postQuery(`${table}`, objFields).pipe(map((data: any) => {
      return data;
    }));
  }


}

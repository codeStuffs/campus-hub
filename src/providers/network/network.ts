import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class NetworkProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkProvider Provider');
  }

}

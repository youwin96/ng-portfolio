import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FloorpriceService {

  constructor(
    private http: HttpClient
  ) { }

  getFloorPrice() {
    this.http.get<any>('api-mainnet.magiceden.dev/v2/collections/angomon/stats').subscribe(data => {
      console.log(data);
    });
  }
}

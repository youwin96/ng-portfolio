import { Injectable } from '@angular/core';
import { NFTS } from './mocknfts';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, tap, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftsService {

  constructor(private http: HttpClient) { }

  getNfts(): any {
    return NFTS;
  }

  getNft(id: number): any {
    const obj = NFTS.find(x => x.id === id)
    console.log(obj)
    return obj;
  };


  getStats(symbol: string): Observable<any> {
    return this.http.get(`https://api-mainnet.magiceden.dev/v2/collections/${symbol}/stats`)
    .pipe(
      tap(result => {

      })
    )
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throwError(error.message || "")
  // }

  
}

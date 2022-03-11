import { Injectable } from '@angular/core';
import { NFTS } from './mocknfts';

@Injectable({
  providedIn: 'root'
})
export class NftsService {

  getNfts(): any {
    return NFTS;
  }

  getNft(id: number): any {
    const obj = NFTS.find(x => x.id === id)
    console.log(obj)
    return obj;
  };

  constructor() { }
}

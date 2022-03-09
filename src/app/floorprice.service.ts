import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NftsComponent } from './nfts/nfts.component';

@Injectable({
  providedIn: 'root'
})
export class FloorpriceService {

  floorPrice: number = 0

  constructor(
    private http: HttpClient,
    private nftComponent: NftsComponent,
  ) { }

  test() {
    this.http.get<any>(`https://api-mainnet.magiceden.dev/v2/collections/${this.nftComponent.nfts[0].name}/stats`).subscribe(data => {
      console.log(data);
      this.floorPrice = data.floorPrice;
      console.log(this.floorPrice);
      // this.nftComponent.
      this.nftComponent.nfts[0].price = this.floorPrice;
      console.log(this.nftComponent.nfts[0].price);
    });
  
  }

  fetchFloorPrice(name: string) {
    this.http.get<any>(`https://api-mainnet.magiceden.dev/v2/collections/${name}/stats`)
    .subscribe(data => this.floorPrice = data);
  }
}

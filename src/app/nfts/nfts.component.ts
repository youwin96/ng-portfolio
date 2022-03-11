import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NftsService } from '../nfts.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  // floorPrice: number = 0
  // updatedFloorPrice: number[] = []
  nfts: any[] = []

  constructor(
    private http: HttpClient,
    // private floorPriceService: FloorpriceService,
    private changeDetector: ChangeDetectorRef,
    private nftsService: NftsService
  ) { }

  ngOnInit(): void {
    this.getNfts();
    // this.initNft();
    // this.changeFloorPrice();
  }

  // async initNft() {
  //   await this.getNftApi('angomon').then(data => {
  //     console.log(data);
  //   }).catch(err => {

  //   });
  // }

  getNfts(): void {
    this.nfts = this.nftsService.getNfts();
  }

  searchText: string = '';

  //called when search component emits event
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

  sortFloorD(): any {
    this.nfts = this.nfts.sort(function (a, b) {
      return b.price - a.price
    });
  }

  sortFloorA(): any {
    this.nfts = this.nfts.sort(function (a, b) {
      return a.price - b.price
    });
  }

  sortNameD(): any {
    this.nfts = this.nfts.sort(function (a, b) {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
  }

  sortNameA(): any {
    this.nfts = this.nfts.sort(function (a, b) {
      if(b.name < a.name) { return -1; }
      if(b.name > a.name) { return 1; }
      return 0;
    });
  }

  resetSelect(): any{
    this.nfts = this.nfts.sort(function (a, b) {
      return a.id - b.id
    });
  }

  selectedValue = ''

  // async changeFloorPrice() {
  //   this.nfts.forEach(async (data: any) => {
  //     data = await this.fetchFloorPrice(data.symbol);
  //     this.updatedFloorPrice.push(data);
  //     console.log(this.updatedFloorPrice)

      // data.price = await this.getNftApi(data.symbol);
    // });
  //     this.changeDetector.detectChanges();

  //     setTimeout(() => {
  //      console.log(this.nfts);

  //    }, 3000);
  //  }

  //  getNftApi(name: string): Promise<any> {
  //    return new Promise((resolve, reject) => {
  //      this.http.get<any>(`https://api-mainnet.magiceden.dev/v2/collections/${name}/stats`)
  //        .subscribe(data => {
  //          if (data) {
  //            resolve(data.price);
  //          }
  //          // this.floorPrice = data.floorPrice;
  //          // return (data.floorPrice / 1000000000);
  //        }, err => {
  //          if (err) {
  //            reject(err);
  //          }
  //        });
  //    });
  
}

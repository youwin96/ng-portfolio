import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NftsService } from '../nfts.service';

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
  

  getAllNfts() {
    return this.nfts.length;

  }

  getLowPrice() {
    return this.nfts.filter(
      nfts => nfts.price >= 1 && nfts.price < 2).length;
  }

  getMediumPrice() {
    return this.nfts.filter(
      nfts => nfts.price >= 2 && nfts.price < 3).length;
  }

  getHighPrice() {
    return this.nfts.filter(
      nfts => nfts.price >= 3).length;
  }

  fetchFloorPrice(name: string): any {
    this.http.get<any>(`https://api-mainnet.magiceden.dev/v2/collections/${name}/stats`).subscribe(data => {
      console.log(data);
      // this.floorPrice = data.floorPrice;
      return (data.floorPrice / 1000000000);
    });

  }

  searchText: string = '';

  //called when search component emits event
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

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

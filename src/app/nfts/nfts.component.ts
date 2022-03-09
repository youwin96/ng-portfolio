import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FloorpriceService } from '../floorprice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  floorPrice: number = 0

  constructor(
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.initNft();
    this.changeFloorPrice();
  }

  async initNft() {
    await this.getNftApi('angomon').then(data => {
      console.log(data);
    }).catch(err => {

    });
  }
  public nfts = [
    {
      id: 1, name: 'Angomon', symbol: 'angomon', image: 'assets/nfts/angomon.png', price: 1.5
    },
    // {
    //   id: 2, name: 'Bohemia', symbol: 'bohemia', image: 'assets/nfts/bohemia.png', price: 2.5
    // },
    {
      id: 3, name: 'Cozy Cubs', symbol: 'cozy_cubs', image: 'assets/nfts/cozy.png', price: 3.5
    },
    {
      id: 4, name: 'Elementies', symbol: 'the_elementies', image: 'assets/nfts/element1.png', price: 1.2
    },
    {
      id: 5, name: 'Jelly Beats', symbol: 'jelly_beasts', image: 'assets/nfts/jelly1.png', price: 2.8
    },
    {
      id: 6, name: 'MixMob', symbol: 'mixmob', image: 'assets/nfts/mixmob1.png', price: 3.9
    },
    {
      id: 7, name: 'Magic Mushies', symbol: 'magic_mushies', image: 'assets/nfts/mushies.png', price: 2.4
    },
    {
      id: 8, name: 'Nifty Nanas', symbol: 'nifty_nanas', image: 'assets/nfts/nanas1.png', price: 2.3
    },
    {
      id: 9, name: 'Nyan Heroes', symbol: 'nyan_heroes', image: 'assets/nfts/nyan1.png', price: 1.3
    },
    {
      id: 10, name: 'Pixels', symbol: 'matrica_labs_pixels', image: 'assets/nfts/pixel3.png', price: 1.9
    },
    {
      id: 11, name: 'Pixels', symbol: 'matrica_labs_pixels', image: 'assets/nfts/pixel4.png', price: 2.6
    },
    {
      id: 12, name: 'Portals', symbol: 'portals', image: 'assets/nfts/portals1.png', price: 3.2
    },
    {
      id: 13, name: 'Saibogu', symbol: 'saibogu_corp', image: 'assets/nfts/saibogu1.png', price: 1.6
    },
  ]

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

  async changeFloorPrice() {
    this.nfts.forEach(async (data: any) => {
      // data.price = await this.fetchFloorPrice(data.symbol);
      data.price = await this.getNftApi(data.symbol);
    });
    this.changeDetector.detectChanges();

    setTimeout(() => {
      console.log(this.nfts);

    }, 3000);
  }

  getNftApi(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`https://api-mainnet.magiceden.dev/v2/collections/${name}/stats`)
        .subscribe(data => {
          if (data) {
            resolve(data.price);
          }
          // this.floorPrice = data.floorPrice;
          // return (data.floorPrice / 1000000000);
        }, err => {
          if (err) {
            reject(err);
          }
        });
    });
  }
}

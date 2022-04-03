import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NftsService } from '../nfts.service';
import { FormControl } from '@angular/forms';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private nftsService: NftsService,
  ) { }

  ngOnInit(): void {
    this.getNfts();

  }

  nfts: any[] = []
  nftFp: any;

  selectedValue = ''

  async getNfts() {
    this.nfts = this.nftsService.getNfts();

    for (let i = 0; i < this.nfts.length; i++) {
      this.nfts[i].floorPrice = await this.getFloor(this.nfts[i].symbol);
    }

    // console.log(await this.getFloor(this.nfts[0].symbol));
    // console.log(this.nfts);
  }

  searchText: string = '';

  //called when search component emits event
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
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
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }

  sortNameA(): any {
    this.nfts = this.nfts.sort(function (a, b) {
      if (b.name < a.name) { return -1; }
      if (b.name > a.name) { return 1; }
      return 0;
    });
  }

  resetSelect(): any {
    this.nfts = this.nfts.sort(function (a, b) {
      return a.id - b.id
    });
  }


  getFloor(symbol: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nftsService.getStats(symbol)
      .subscribe((data: any) => {
        resolve(data.floorPrice / 1000000000);
        // return data.floorPrice / 1000000000;
      }, err => {
        reject(err);
      });
    });
  }
}
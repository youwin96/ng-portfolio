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

  constructor(
    private http: HttpClient,
    private nftsService: NftsService
  ) { }

  ngOnInit(): void {
    this.getNfts();

  }

  nfts: any[] = []
  
  selectedValue = ''

  getNfts(): void {
    this.nfts = this.nftsService.getNfts();
  }

  searchText: string = '';

  //called when search component emits event
  onSearchTextEntered(searchValue: string){
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


}

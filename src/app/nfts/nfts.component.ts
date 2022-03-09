import { Component, OnInit } from '@angular/core';
import { FloorpriceService } from '../floorprice.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  constructor(private floorpriceService: FloorpriceService) { }

  ngOnInit(): void {
  }

  nfts = [
    {
      id:1, name:'Angomon', image:'assets/nfts/angomon.png', price: 1.5
    },
    {
      id:1, name:'Bohemia', image:'assets/nfts/bohemia.png', price: 2.5
    },
    {
      id:1, name:'Cozy', image:'assets/nfts/cozy.png', price: 3.5
    },
    {
      id:1, name:'Elementie', image:'assets/nfts/element1.png', price: 1.2
    },
    {
      id:1, name:'JellyBeast', image:'assets/nfts/jelly1.png', price: 2.8
    },
    {
      id:1, name:'Mixmob', image:'assets/nfts/mixmob1.png', price: 3.9
    },
    {
      id:1, name:'Mushies', image:'assets/nfts/mushies.png', price: 2.4
    },
    {
      id:1, name:'NiftyNanas', image:'assets/nfts/nanas1.png', price: 2.3
    },
    {
      id:1, name:'Nyan Hero', image:'assets/nfts/nyan1.png', price: 1.3
    },
    {
      id:1, name:'Pixels', image:'assets/nfts/pixel3.png', price: 1.9
    },
    {
      id:1, name:'Pixels', image:'assets/nfts/pixel4.png', price: 2.6
    },
    {
      id:1, name:'Portals', image:'assets/nfts/portals1.png', price: 3.2
    },
    {
      id:1, name:'Saibogu', image:'assets/nfts/saibogu1.png', price: 1.6
    },
  ]

  getAllNfts(){
    return this.nfts.length;

  }

  getLowPrice(){
    return this.nfts.filter(
      nfts => nfts.price >= 1 && nfts.price < 2).length;
  }

  getMediumPrice(){
    return this.nfts.filter(
      nfts => nfts.price >= 2 && nfts.price < 3).length;
  }

  getHighPrice(){
    return this.nfts.filter(
      nfts => nfts.price >= 3 ).length;
  }

}

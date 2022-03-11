import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NftsService } from '../nfts.service';


@Component({
  selector: 'app-nftdetails',
  templateUrl: './nftdetails.component.html',
  styleUrls: ['./nftdetails.component.css']
})
export class NftdetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private nftsService: NftsService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getNft()
  }

  nft: any = []

  getNft(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.nft = this.nftsService.getNft(id)
    console.log(this.nft);
  }

  goBack(): void {
    this.location.back();
  }

}

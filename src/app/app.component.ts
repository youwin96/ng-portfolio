import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NftsComponent } from './nfts/nfts.component';
import { Observable } from 'rxjs';
import { NftsService } from './nfts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-brice';
  
  floorPrice: number = 0

  data: any;

  ngOnInit() {
    this.getNft();
  }

  constructor(
    private http: HttpClient,
    private nftService: NftsService,
  ) { }

  getNft() {
    this.data = this.nftService.getStats('angomon');
    console.log(this.data);
  }
}


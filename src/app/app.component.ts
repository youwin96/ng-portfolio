import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NftsComponent } from './nfts/nfts.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-brice';
  
  floorPrice: number = 0

  ngOnInit() {
  }

  constructor(
    private http: HttpClient,
  ) { }


}


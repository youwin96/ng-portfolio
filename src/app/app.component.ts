import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-brice';

  constructor(
    private http: HttpClient
  ) { }

  test() {
    this.http.get<any>('https://api-mainnet.magiceden.dev/v2/collections/monkelabs/stats').subscribe(data => {
      console.log(data);
    });
  
  }

}


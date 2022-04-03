import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NftsComponent } from './nfts/nfts.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NftdetailsComponent } from './nftdetails/nftdetails.component';
import { LiveFloorpriceComponent } from './live-floorprice/live-floorprice.component';
import { ChildTestComponent } from './child-test/child-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NftsComponent,
    SearchComponent,
    ChartComponent,
    NftdetailsComponent,
    LiveFloorpriceComponent,
    ChildTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [NftsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

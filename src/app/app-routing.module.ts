import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NftsComponent } from './nfts/nfts.component';
import { ChartComponent } from './chart/chart.component';
import { NftdetailsComponent } from './nftdetails/nftdetails.component';
import { LiveFloorpriceComponent } from './live-floorprice/live-floorprice.component';
import { ChildTestComponent } from './child-test/child-test.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'nfts', component: NftsComponent},
  {path: 'detail/:id', component: NftdetailsComponent},
  {path: 'livefloorprice', component: LiveFloorpriceComponent},
  {path: 'child', component: ChildTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

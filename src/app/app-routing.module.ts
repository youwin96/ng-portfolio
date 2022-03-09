import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NftsComponent } from './nfts/nfts.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nfts', component: NftsComponent},
  {path: 'chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

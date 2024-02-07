import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailStockComponent } from './detail-stock.component';

const routes: Routes = [
  { path: '', component: DetailStockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailStockRoutingModule { }

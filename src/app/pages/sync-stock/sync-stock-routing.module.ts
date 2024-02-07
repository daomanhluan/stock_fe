import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyncStockComponent } from './sync-stock.component';

const routes: Routes = [
  { path: '', component: SyncStockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncStockRoutingModule { }

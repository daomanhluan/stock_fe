import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockBreakMAComponent } from './stock-break-ma.component';

const routes: Routes = [
  { path: '', component: StockBreakMAComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockBreakMARoutingModule { }

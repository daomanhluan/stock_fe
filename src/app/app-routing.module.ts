import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/stock-today' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'stock-today', loadChildren: () => import('./pages/mystock/mystock.module').then(m => m.MystockModule) },
  { path: 'stock-break-ma', loadChildren: () => import('./pages/stock-break-ma/stock-break-ma.module').then(m => m.StockBreakMAModule) },
  { path: 'detail/:code', loadChildren: () => import('./pages/detail-stock/detail-stock.module').then(m => m.DetailStockModule) },
  { path: 'sync-stock', loadChildren: () => import('./pages/sync-stock/sync-stock.module').then(m => m.SyncStockModule) },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

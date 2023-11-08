import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MystockComponent } from './mystock.component';

const routes: Routes = [
  { path: '', component: MystockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MystockRoutingModule { }

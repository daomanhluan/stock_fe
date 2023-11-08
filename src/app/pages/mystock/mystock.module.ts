import { NgModule } from '@angular/core';

import { MystockRoutingModule } from './mystock-routing.module';

import { MystockComponent } from './mystock.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [MystockRoutingModule, NzTableModule, NzDividerModule , CommonModule],
  declarations: [MystockComponent],
  exports: [MystockComponent ]
})
export class MystockModule { }

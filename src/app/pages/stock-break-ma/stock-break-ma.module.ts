import { NgModule } from '@angular/core';

import { StockBreakMARoutingModule } from './stock-break-ma-routing.module';

import { StockBreakMAComponent } from './stock-break-ma.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzSelectModule  } from 'ng-zorro-antd/select';

@NgModule({
  imports: [StockBreakMARoutingModule, NzTableModule, NzDividerModule , CommonModule, NzSelectModule],
  declarations: [StockBreakMAComponent],
  exports: [StockBreakMAComponent ]
})
export class StockBreakMAModule { }

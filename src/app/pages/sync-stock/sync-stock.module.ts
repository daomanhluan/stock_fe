import { NgModule } from '@angular/core';

import { SyncStockRoutingModule } from './sync-stock-routing.module';
import { FormsModule } from '@angular/forms';
import { SyncStockComponent } from './sync-stock.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzSelectModule  } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {  NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DatePipe } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
@NgModule({
  imports: [SyncStockRoutingModule,NzDatePickerModule,NzAlertModule ,NzSpinModule, NzInputModule,NzButtonModule,NzAnchorModule, NzFormModule, NzTableModule, FormsModule, NzDividerModule , CommonModule, NzSelectModule],
  declarations: [SyncStockComponent],
  exports: [SyncStockComponent],
  providers: [DatePipe],
})
export class SyncStockModule { }

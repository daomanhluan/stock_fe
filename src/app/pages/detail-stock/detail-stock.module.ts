import { NgModule } from '@angular/core';

import { DetailStockRoutingModule } from './detail-stock-routing.module';

import { DetailStockComponent } from './detail-stock.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule, DatePipe } from '@angular/common';
import { NzSelectModule  } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  imports: [DetailStockRoutingModule, NzTableModule, NzDividerModule , CommonModule, NzSelectModule, NzButtonModule, NzDatePickerModule, NzFormModule, FormsModule ],
  declarations: [DetailStockComponent],
  exports: [DetailStockComponent ],
  providers: [DatePipe],
})
export class DetailStockModule { }

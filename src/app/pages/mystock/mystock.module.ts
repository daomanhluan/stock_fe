import { NgModule } from '@angular/core';

import { MystockRoutingModule } from './mystock-routing.module';

import { MystockComponent } from './mystock.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule, DatePipe } from '@angular/common';
import { NzSelectModule  } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {  NzAnchorModule } from 'ng-zorro-antd/anchor';
@NgModule({
  imports: [MystockRoutingModule, NzTableModule,NzAnchorModule, NzDividerModule , CommonModule, NzSelectModule, NzButtonModule, NzDatePickerModule, NzFormModule, FormsModule ],
  declarations: [MystockComponent],
  exports: [MystockComponent ],
  providers: [DatePipe],
})
export class MystockModule { }

import { NgModule } from '@angular/core';

import { MystockRoutingModule } from './mystock-routing.module';

import { MystockComponent } from './mystock.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
import { NzSelectModule  } from 'ng-zorro-antd/select';

@NgModule({
  imports: [MystockRoutingModule, NzTableModule, NzDividerModule , CommonModule, NzSelectModule],
  declarations: [MystockComponent],
  exports: [MystockComponent ]
})
export class MystockModule { }

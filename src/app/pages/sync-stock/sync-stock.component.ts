import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

import { StockService } from 'src/app/stock.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'sync-stock',
  templateUrl: './sync-stock.component.html',
  styleUrls: ['./sync-stock.component.scss'],
})
export class SyncStockComponent implements OnInit {
  day: any;
  date = new Date();
  isShowLoading: boolean = false;
  constructor(private stockService: StockService, private datePipe: DatePipe) {}
  pipe = new DatePipe('en-US');
  ngOnInit(): void {}
  onChange(result: Date): void {
    const date = new Date(); // Replace this with your actual date
    const formattedDate = this.datePipe.transform(result, 'dd/MM/yyyy');
    this.day = formattedDate;
  }

  syncAllStockByTime(): void {
    let req = {
      day: this.day,
    };
    this.isShowLoading = true;
    this.stockService.syncAllStockByDate(req).subscribe((res) =>{
        console.log(res);
        this.isShowLoading = false;
    })
  }
}

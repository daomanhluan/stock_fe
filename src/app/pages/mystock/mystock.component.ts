import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import {
  FindStockRequest,
  ObjectRecords,
  StockCodeRequest,
  StockHistory,
  TemplateResponse,
} from 'src/app/models/StockHistory.model';
import { StockService } from 'src/app/stock.service';
@Component({
  selector: 'app-mystock',
  templateUrl: './mystock.component.html',
  styleUrls: ['./mystock.component.scss'],
})
export class MystockComponent implements OnInit {
  constructor(private stockService: StockService, private datePipe: DatePipe) {}

  checked = false;
  indeterminate = false;
  // listOfCurrentPageData: readonly ItemData[] = [];
  // listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  responseStockHistory: TemplateResponse<ObjectRecords<StockHistory[]>>;
  objectRecordsStockHistory: ObjectRecords<StockHistory[]>;
  stockHistories: StockHistory[];
  total: number = 0;
  page: number = 1;
  size: number = 20;
  day: any;

  date = new Date();
  pipe = new DatePipe('en-US');
  listOfOption: Array<{ label: string; value: string }> = [];
  sizes: NzSelectSizeType = 'default';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];


  onChange(result: Date): void {
    const date = new Date(); // Replace this with your actual date
    const formattedDate = this.datePipe.transform(result, 'dd/MM/yyyy');
    this.day = formattedDate;
    let req = {
      page: this.page,
      size: this.size,
      day: this.day,
    };
    this.loadData(req);
  }

  onItemChecked(code: string, checked: boolean): void {
    let req = {
     code: code
    };
    this.stockService.followStock(req).subscribe((res)=>{

    });
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.stockHistories.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.stockHistories.some((item) => this.setOfCheckedId.has(item.id)) &&
      !this.checked;
  }

  changePage(e: number): void {
    this.page = e;
    let req = {
      page: this.page,
      size: this.size,
      day: this.day,
    };
    this.loadData(req);
  }

  changeSize(e: number): void {
    this.size = e;
    this.page = 1;
    let req = {
      page: this.page,
      size: this.size,
      day: this.day,
    };
    this.loadData(req);
  }

  loadData(req: FindStockRequest) {
    this.stockService.findHotStockToday(req).subscribe((res) => {
      console.log('findStock: ' + res.success);
      this.responseStockHistory = res;
      this.objectRecordsStockHistory = this.responseStockHistory.data!;
      this.stockHistories = this.objectRecordsStockHistory.records!;
      this.total = this.objectRecordsStockHistory.total
        ? this.objectRecordsStockHistory.total
        : 0;

      this.stockHistories.forEach(
        (e) =>
          (e.volume_str = e.volume
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      );
      this.stockHistories.forEach(
        (e) =>
          (e.average_data_statistic_today.average_volume10_day_str =
            e.average_data_statistic_today.average_volume10_day
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      );
      this.stockHistories.forEach(
        (e) =>
          (e.average_data_statistic_today.average_volume20_day_str =
            e.average_data_statistic_today.average_volume20_day
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      );
      this.stockHistories.forEach(
        (e) =>
          (e.average_data_statistic_today.average_volume50_day_str =
            e.average_data_statistic_today.average_volume50_day
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      );
      this.stockHistories.forEach((e) => {
        e.volume_str = e.volume
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        e.average_data_statistic_today.average_volume10_day_str =
          e.average_data_statistic_today.average_volume10_day
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        e.average_data_statistic_today.average_volume10_day_str =
          e.average_data_statistic_today.average_volume20_day
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        e.average_data_statistic_today.average_volume50_day_str =
          e.average_data_statistic_today.average_volume50_day
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        e.color = e.ceiling_price ? '#f23aff' : '#0bdf39';

        if (e.rate_volume10_day > 1.8) {
          e.color_for_rate_volume_10_day = '#f23aff';
        } else if (e.rate_volume10_day > 1.4) {
          e.color_for_rate_volume_10_day = '#0bdf39';
        }

        if (e.rate_volume20_day > 1.8) {
          e.color_for_rate_volume_20_day = '#f23aff';
        } else if (e.rate_volume20_day > 1.4) {
          e.color_for_rate_volume_20_day = '#0bdf39';
        }

        if (e.rate_volume50_day > 1.8) {
          e.color_for_rate_volume_50_day = '#f23aff';
        } else if (e.rate_volume50_day > 1.4) {
          e.color_for_rate_volume_50_day = '#0bdf39';
        }
      });
    });
  }
  clickTimKiem(){
    this.page = 1;
    let req = {
      page: this.page,
      size: this.size,
      day: this.day,
    };
    this.loadData((req));
  }

  ngOnInit(): void {

    var dayOfWeek = this.date.getDay();
    console.log(dayOfWeek);

    var isWeekend = (dayOfWeek === 6) || (dayOfWeek  === 0);
    if(isWeekend){
      dayOfWeek === 6 ? this.date.setDate(this.date.getDate() - 1) : this.date.setDate(this.date.getDate() - 2);
    }
    const formattedDate = this.datePipe.transform(this.date, 'dd/MM/yyyy');
    this.day = formattedDate;

    let req = {
      page: this.page,
      size: this.size,
      day: this.day
    };
    this.loadData(req);

    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }


}

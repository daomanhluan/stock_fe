import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import {
  FindStockByCodeRequest,
  FindStockRequest,
  ObjectRecords,
  StockHistory,
  TemplateResponse,
} from 'src/app/models/StockHistory.model';
import { StockService } from 'src/app/stock.service';
@Component({
  selector: 'app-detail-stock',
  templateUrl: './detail-stock.component.html',
  styleUrls: ['./detail-stock.component.scss'],
})
export class DetailStockComponent implements OnInit {
  constructor(private stockService: StockService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.code = params.get('code');
    })
    let req = {
      page: this.page,
      size: this.size,
      code: this.code
    };
    this.loadData(req);
  }

  responseStockHistory: TemplateResponse<ObjectRecords<StockHistory[]>>;
  objectRecordsStockHistory: ObjectRecords<StockHistory[]>;
  stockHistories: StockHistory[];
  total: number = 0;
  page: number = 1;
  size: number = 30;
  code: any;

  date = null;
  pipe = new DatePipe('en-US');

  changePage(e: number): void {
    this.page = e;
    let req = {
      code: this.code,
      size: this.size,
      page: this.page
    };
    this.loadData(req);
  }

  changeSize(e: number): void {
    this.size = e;
    this.page = 1;
    let req = {
      code: this.code,
      size: this.size,
      page: this.page
    };
    this.loadData(req);
  }

  loadData(req: FindStockByCodeRequest) {
    this.stockService.findStockHistoryByCode(req).subscribe((res) => {
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

        e.color = e.price_fluctuation > 0 ? '#0bdf39' : '#ff0017';

        if(e.price_fluctuation == 0){
          e.color = "#0bdf39";
        }
        else if(e.price_fluctuation > 0 && e.price_fluctuation < 6.8){
          e.color = "#0bdf39";
        }else if(e.price_fluctuation >= 6.8 && e.price_fluctuation < 9 && e.ceiling_price){
          e.color = "#f23aff";
        }else if(e.price_fluctuation > 9 && e.ceiling_price){
          e.color = "#f23aff";
        }else if (e.price_fluctuation < 0 && e.price_fluctuation > -6.6){
          e.color = "#ff0017";
        }else if (e.price_fluctuation < -7.1){
          e.color = "#00c9ff";
        }

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
      code: this.code,
    };
    this.loadData((req));
  }


}

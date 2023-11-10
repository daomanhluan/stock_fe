import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import {
  FindStockRequest,
  ObjectRecords,
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
  constructor(private stockService: StockService) {}

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        // this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.stockHistories.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        // this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.stockHistories.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        // this.refreshCheckedStatus();
      },
    },
  ];
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
  size: number = 10;


  listOfOption: Array<{ label: string; value: string }> = [];
  sizes: NzSelectSizeType = 'default';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.stockHistories.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.stockHistories.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.stockHistories.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  changePage(e:number):void {
    this.page = e;
    let req = {
      page: this.page,
      size: this.size,
      day: '08/11/2023',
    };
    this.loadData(req);
  }

  changeSize(e:number):void {
    this.size = e;
    this.page = 1;
    let req = {
      page: this.page,
      size: this.size,
      day: '08/11/2023',
    };
    this.loadData(req);
  }

  loadData(req: FindStockRequest){
    this.stockService.findStock(req).subscribe((res) => {
      console.log('findStock: ' + res.success);
      this.responseStockHistory = res;
      this.objectRecordsStockHistory = this.responseStockHistory.data!;
      this.stockHistories = this.objectRecordsStockHistory.records!;
      this.total = this.objectRecordsStockHistory.total ? this.objectRecordsStockHistory.total : 0;

    });
  }

  ngOnInit(): void {
    let req = {
      page: this.page,
      size: this.size,
      day: '08/11/2023',
    };
    this.loadData(req);


    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}



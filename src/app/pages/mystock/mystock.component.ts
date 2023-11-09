import { Component, OnInit } from '@angular/core';
import { FindStockRequest } from 'src/app/models/StockHistory.model';
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
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();
  products: any = {
    data: [],
    total: 0,
  };
  pageSize = 10;
  filter = {
    limit: 10,
    skip: 0,
  };

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
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = new Array(35).fill(0).map((_, index) => ({
      id: index,
      code: `SSI`,
      currentPrice: 32,
      average10Price: 29,
      average20Price: 29,
      average50Price: 29,
      average200Price: 29,
    }));

    this.stockService.findProject().subscribe((res: any) => {
      this.products.total = res?.total;
      this.products.data = res?.products;
      console.log(this.products.total);
    });
  }
}

interface ItemData {
  id: number;
  code: string;
  currentPrice: number;
  average10Price: number;
  average20Price: number;
  average50Price: number;
  average200Price: number;
}

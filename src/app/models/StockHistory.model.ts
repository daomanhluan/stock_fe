export class StockHistory{
  id!: number;
  code!: string;
  closed_price!: number;
  price_fluctuation!: number;
  volume!: number;
  day!: string;
}

export class TemplateResponse<T>{
  success:boolean | undefined;
  message:string | undefined;
  data:T | undefined
}

export class ObjectRecords<T>{
  total:number | undefined;
  data:T | undefined
}


export class FindStockRequest{
  day: String | undefined;
  page: number | undefined;
  size: number | undefined;
}

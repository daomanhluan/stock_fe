export class StockHistory {
  id!: number;
  code!: string;
  closed_price!: number;
  price_fluctuation!: number;
  volume!: number;
  day!: string;
  average_data_statistic_yesterday: AverageDataStatistic;
}

export class AverageDataStatistic {
  average_price10_day: number;
  average_price20_day: number;
  average_price50ay: number;
  average_price100_day: number;
  average_price200_day: number;
  average_volume10_day: number;
  average_volume20_day: number;
  average_volume50_day: number;
  average_volume100_day: number;
  average_volume200_day: number;
}

export class TemplateResponse<T> {
  success: boolean | undefined;
  message: string | undefined;
  data: T | undefined;
}

export class ObjectRecords<T> {
  total: number | undefined;
  records: T | undefined;
}

export class FindStockRequest {
  day: String | undefined;
  page: number | undefined;
  size: number | undefined;
}

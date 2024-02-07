export class StockHistory {
  id!: number;
  code!: string;
  closed_price!: number;
  price_fluctuation!: number;
  volume!: number;
  day!: string;
  stock_follow!: boolean;

  average_data_statistic_yesterday: AverageDataStatistic;
  average_data_statistic_today: AverageDataStatistic;

  rate_volume10_day!: number;
  rate_volume20_day!: number;
  rate_volume50_day!: number;
  ceiling_price!: boolean;

  volume_str!: string;
  color!:string;
  color_for_rate_volume_10_day!:string;
  color_for_rate_volume_20_day!:string;
  color_for_rate_volume_50_day!:string;
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

  average_volume10_day_str!: string;
  average_volume20_day_str!: string;
  average_volume50_day_str!: string;
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

export class FindStockByCodeRequest {
  code: String | undefined;
  page: number | undefined;
  size: number | undefined;
}

export class SyncStockRequest {
  day: String | undefined;
}

export class StockCodeRequest {
  code: String | undefined;
}

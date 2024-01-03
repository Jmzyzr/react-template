export interface OrderListParams {
  activity_name?: string;
  activity_status?: number;
  page_size: number;
  page_num: number;
}

export interface OrderListResult {
  id: string;
  activity_name: string;
  begin_time: string;
  end_time: string;
  activity_status: number;
  total_visitors: number;
}

export interface OrderFormProps {
  id?: string;
  name: string;
}

export type OrderContextProps = {
  disabled?: boolean;
};

import { ResponseApi, Status } from "@/types/global";

export type TGetProductParams = {
  take?: number;
  skip?: number;
  search?: string;
}

export type TDataProduct = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  is_active: Status;
  created_at: string;
}
export type TGetProductResponse = ResponseApi<TDataProduct>
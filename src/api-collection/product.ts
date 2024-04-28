import { TGetProductParams, TGetProductResponse } from "@/api-collection/product.d";
import { AxiosResponse } from "axios";
import { methodGet } from ".";

export function getProducts(params?:TGetProductParams): Promise<AxiosResponse<TGetProductResponse>>{
  return methodGet("/product", {
    params
  });
}
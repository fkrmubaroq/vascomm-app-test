import {
  TGetProductParams,
  TGetProductResponse,
  TPayloadProduct,
  TPostProductResponse,
} from "@/api-collection/product.d";
import { appendFormFromObject } from "@/lib/utils";
import { ResponseApi } from "@/types/global";
import { AxiosResponse } from "axios";
import { methodDelete, methodGet, methodPost, methodPut } from ".";

export function getProducts(params?:TGetProductParams): Promise<AxiosResponse<TGetProductResponse>>{
  return methodGet("/product", {
    params
  });
}

export function createProduct(payload: TPayloadProduct): Promise<AxiosResponse<TPostProductResponse>> {
  const formPayload = appendFormFromObject(payload);
  return methodPost("/product", formPayload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function updateProduct(id: number,payload: TPayloadProduct): Promise<AxiosResponse<TPostProductResponse>> {
  const formPayload = appendFormFromObject(payload);
  return methodPut(`/product/${id}`, formPayload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function deleteProduct(id: number): Promise<AxiosResponse<ResponseApi<number>>> {
  return methodDelete(`/product/${id}`);
}

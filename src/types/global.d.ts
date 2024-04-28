export type ResponseApi<TData=any> = {
  code: number;
  message: string;
  data?: TData;
}

export type Status = "0" | "1";
import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export function methodGet(url: string, config: AxiosRequestConfig = {}) {
  return instance.get(url, config);
}
export function methodDelete(url: string, config: AxiosRequestConfig = {}) {
  return instance.delete(url, config);
}

export function methodPost<TPayload>(
  url: string,
  payload?: TPayload,
  config: AxiosRequestConfig = {}
) {
  return instance.post(url, payload, config);
}
export function methodPut<TPayload>(
  url: string,
  payload?: TPayload,
  config: AxiosRequestConfig = {}
) {
  return instance.put(url, payload, config);
}

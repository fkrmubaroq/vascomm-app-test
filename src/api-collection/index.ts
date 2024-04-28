import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: process.env.BASE_URL_API,
  timeout: 30000,
});

export function methodGet(url: string, config: AxiosRequestConfig = {}) {
  return instance.get(url, config);
}

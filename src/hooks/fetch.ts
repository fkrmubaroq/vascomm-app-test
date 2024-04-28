import type { ResponseApi } from "@/types/global";
import { AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
export const useApiCollection = async <TData>(
  fn: () => Promise<AxiosResponse<ResponseApi<TData>>>
) => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  Response;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fn();
        if (response.status !== 200 || response.data.code !== 200) {
          throw new Error("Network response was not ok");
        }
        const json = response.data.data;
        setData(response.data?.data || null);
        setError(null);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};
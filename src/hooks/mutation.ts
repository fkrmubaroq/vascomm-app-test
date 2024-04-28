import { useState } from "react";

type TOptions<TPayload> = {
  mutateFn: (payload: TPayload) => Promise<Response>;
  payload: TPayload;
  onSuccess?: (response: TPayload) => void;
  onError?: (message: string) => void;
  onSettled?: () => void;
};

type Response<TData = any> = {
  code: number;
  message: string;
  data?: TData;
};
export default async function useMutation<TPayload>(
  options: TOptions<TPayload>
) {
  const [isLoading, setIsLoading] = useState(false);
  const mutate = async () => {
    setIsLoading(true);
    try {
      const response = await options.mutateFn(options.payload);
      if (response.code !== 200) {
        throw new Error(response.message);
      }
      options.onSuccess?.(response.data);
    } catch (e: any) {
      options.onError?.(e.message);
    } finally {
      options.onSettled?.();
      setIsLoading(false);
    }
  };

  return { isLoading, mutate };
}

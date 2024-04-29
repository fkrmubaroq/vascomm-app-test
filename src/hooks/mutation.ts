import { ResponseApi } from "@/types/global";
import { useState } from "react";

type TOptions<TPayload> = {
  mutateFn: (payload: TPayload) => Promise<ResponseApi<TPayload>>;
  onSuccess?: (response: ResponseApi<TPayload>) => void;
  onError?: (message: string) => void;
  onSettled?: () => void;
};

export default function useMutation<TPayload>(
  options: TOptions<TPayload>
) {
  const [isLoading, setIsLoading] = useState(false);
  const mutate = (payload: TPayload) => {
    setIsLoading(true);
    options
      .mutateFn(payload)
      .then((response) => {
        if (response.code !== 201 && response.code !== 200) {
          throw new Error(response.message);
        }
        options.onSuccess?.(response);
      })
      .catch((e) => {
        options.onError?.(e.message);
      })
      .finally(() => {
        options.onSettled?.();
        setIsLoading(false);
      });
  };

  return { isLoading, mutate };
}

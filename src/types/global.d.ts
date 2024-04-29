export type ResponseApi<TData=any> = {
  code: number;
  message: string;
  data?: TData;
}

export type Status = "0" | "1";

export type SidebarMenu = {
  icon: React.ReactNode;
  text: string;
  href: string
}

export type TModal<TData = any> = {
  show: boolean;
  data?: TData | null,
  edit?: boolean;
}
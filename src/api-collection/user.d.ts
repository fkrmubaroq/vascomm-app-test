import { ResponseApi, Status } from "@/types/global";

export type TGetUserParams = {
  take?: number;
  skip?: number;
  search?: string;
};

export type TDataUser = {
  id: number;
  email: string;
  telp: string;
  full_name: string;
  role: "USR" | "ADM";
  is_active: Status;
  created_at: string;
};

export type TGetUserResponse = ResponseApi<TDataUser>;

export type TPostUserResponse = ResponseApi<TDataUser>;

export type TPayloadUser = {
  id?: number;
  full_name: string;
  telp: string;
  email: string;
  role?: "USR" | "ADM";
  is_active?: Status;
  created_at?: string;
};
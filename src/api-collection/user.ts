import { TFormLogin } from "@/types/form";
import { ResponseApi } from "@/types/global";
import { AxiosResponse } from "axios";
import { methodDelete, methodGet, methodPost, methodPut } from ".";
import {
  TGetUserParams,
  TGetUserResponse,
  TPayloadUser,
  TPostUserResponse,
} from "./user.d";

export function login(payload:TFormLogin) {
  return methodPost("/login", payload)
}
export function getUser(
  params?: TGetUserParams
): Promise<AxiosResponse<TGetUserResponse>> {
  return methodGet("/user", {
    params,
  });
}

export function createUser(
  payload: TPayloadUser
): Promise<AxiosResponse<TPostUserResponse>> {
  return methodPost<TPayloadUser>("/user", payload);
}

export function updateUser(
  id: number,
  payload: TPayloadUser
): Promise<AxiosResponse<TPostUserResponse>> {
  return methodPut(`/user/${id}`, payload);
}

export function deleteUser(
  id: number
): Promise<AxiosResponse<ResponseApi<number>>> {
  return methodDelete(`/user/${id}`);
}
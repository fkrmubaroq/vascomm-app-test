export type TFormLogin = {
  email: string;
  telp: string;
  full_name: string;
};

export type TFormCreateUser = {
  id?: number;
  full_name: string;
  telp: string;
  email: string;
  role?: string;
  created_at?: string;
};
export type TFormCreateProduct = {
  id?: number;
  product_name: string;
  image?: File | string;
  price: number;
};

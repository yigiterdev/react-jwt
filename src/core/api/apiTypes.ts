export interface TokenRequestResponse {
  accessToken: string;
}

export interface LoginRequestResponse {
  username: string;
  accessToken: string;
  refreshToken: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  currency_symbol: string;
  arrival_date: string;
  imageUrl: string;
}

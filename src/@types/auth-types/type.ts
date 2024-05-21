export interface LoginType {
   email: string;
   password: string;
}

export interface RegisterType {
   name: string;
   email: string;
   password: string;
}

export interface LoginApiResponse {
   accessToken: string;
   data?: any;
}

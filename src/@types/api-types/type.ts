import { LoginType, RegisterType } from "../auth-types/type";

export interface ApiContextType {
   data: any;
   loading: boolean;
   error: Error | null;
   isAuthenticated: boolean;
   token: string | null;
   register: (registerData: RegisterType) => Promise<void>;
   login: (loginData: LoginType) => Promise<void>;
   logout: () => void;
   makeRequest: (method: string, endpoint: string, body?: any) => Promise<void>;
}

export interface ApiProviderProps {
   children: React.ReactNode;
}

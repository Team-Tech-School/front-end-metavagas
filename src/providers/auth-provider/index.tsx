import { createContext, ReactNode, useContext, useState } from "react";
import { LoginType, RegisterType } from "../../@types/index";
import { api } from "../../api/api";

interface AuthProps {
   children: ReactNode;
}

interface AuthContextData {
   user: any;
   register: (data: RegisterType) => Promise<void>;
   login: (data: LoginType) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProps) => {
   const [user, setUser] = useState({});

   const register = async (data: RegisterType) => {
      try {
         console.log("Register function called with data:", data);
         const response = await api.post("/auth/register", data);
         setUser(response.data);
      } catch (error: any) {
         console.error("Failed to register: ", error);
         throw new Error(error);
      }
   };

   const login = async (data: LoginType) => {
      console.log("Login function called with data:", data);
      try {
         const response = await api.post("/auth/login", data);
         setUser(response.data);
      } catch (error: any) {
         console.error("Failed to login: ", error);
         throw new Error(error);
      }
   };

   return <AuthContext.Provider value={{ user, register, login }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

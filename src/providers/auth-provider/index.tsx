import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { LoginType, RegisterType } from "../../@types/index";
import { api } from "../../api/api";
import { useUserContext } from "../user-provider";

interface AuthProps {
   children: ReactNode;
}

interface AuthContextData {
   user: any;
   isLoggedIn: boolean;
   register: (data: RegisterType) => Promise<void>;
   login: (data: LoginType) => Promise<void>;
   logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProps) => {
   const [user, setUser] = useState<any>({});
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
   const { profile } = useUserContext();

   useEffect(() => {
      const token = localStorage.getItem("accessToken");

      if (token) {
         profile(token)
            .then((userProfile) => {
               setUser(userProfile);
               setIsLoggedIn(true);
            })
            .catch(() => {
               localStorage.removeItem("accessToken");
            });
      }
   }, []);

   const register = async (data: RegisterType) => {
      try {
         const response = await api.post("/auth/register", data);
         return;
      } catch (error: any) {
         console.error("Failed to register: ", error);
         throw new Error(error);
      }
   };

   const login = async (data: LoginType) => {
      try {
         const response = await api.post("/auth/login", data);

         const token = response.data.accessToken;

         localStorage.setItem("accessToken", token);

         const userProfile = await profile(token);

         setUser(userProfile);

         setIsLoggedIn(true);
      } catch (error: any) {
         console.error("Failed to login: ", error);
         throw new Error(error);
      }
   };

   const logout = async () => {
      setUser({});

      setIsLoggedIn(false);

      localStorage.removeItem("accessToken");
   };

   return <AuthContext.Provider value={{ user, isLoggedIn, register, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

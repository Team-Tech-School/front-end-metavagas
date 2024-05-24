import { createContext, ReactNode, useContext } from "react";
import { api } from "../../api/api";

// Aqui vão todas as funcionalidades, com as rotas dentro, relacionadas à entidade User.

interface UserProps {
   children: ReactNode;
}

interface UserContextData {
   profile: (token: string) => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProps) => {
   const profile = async (token: string) => {
      try {
         const response = await api.get("/user/profile", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         return response.data;
      } catch (error: any) {
         console.error("Failed to get user profile: ", error);
         throw new Error(error);
      }
   };

   return <UserContext.Provider value={{ profile }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

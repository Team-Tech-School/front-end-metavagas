import { createContext, ReactNode, useContext } from "react";
// import { api } from "../../api/api";

// Aqui vão todas as funcionalidades, com as rotas dentro, relacionadas à entidade User.

interface UserProps {
   children: ReactNode;
}

interface UserContextData {}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProps) => {
   return <UserContext.Provider value={}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

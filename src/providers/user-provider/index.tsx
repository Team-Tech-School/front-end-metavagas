import { createContext, ReactNode, useContext, useState } from "react";
// import { api } from "../../api/api";

// Aqui vão todas as funcionalidades, com as rotas dentro, relacionadas à entidade User.

interface UserProps {
   children: ReactNode;
}

interface UserContextData {}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProps) => {
   const [user, setUser] = useState({}); // Aqui é só para não ter um "value" vazio.

   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

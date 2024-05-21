import { createContext, ReactNode, useContext, useState } from "react";
// import { api } from "../../api/api";

// Aqui vão todas as funcionalidades, com as rotas dentro, relacionadas à entidade Vacancy.

interface VacanciesProps {
   children: ReactNode;
}

interface VacanciesContextData {}

const VacanciesContext = createContext<VacanciesContextData>({} as VacanciesContextData);

export const VacanciesProvider = ({ children }: VacanciesProps) => {
   const [user, setUser] = useState({}); // Aqui é só para não ter um "value" vazio.

   return <VacanciesContext.Provider value={user}>{children}</VacanciesContext.Provider>;
};

export const useVacanciesContext = () => useContext(VacanciesContext);

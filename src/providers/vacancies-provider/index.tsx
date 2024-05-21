import { createContext, ReactNode, useContext } from "react";
// import { api } from "../../api/api";

// Aqui vão todas as funcionalidades, com as rotas dentro, relacionadas à entidade Vacancy.

interface VacanciesProps {
   children: ReactNode;
}

interface VacanciesContextData {}

const VacanciesContext = createContext<VacanciesContextData>({} as VacanciesContextData);

export const VacanciesProvider = ({ children }: VacanciesProps) => {
   return <VacanciesContext.Provider value={}>{children}</VacanciesContext.Provider>;
};

export const useVacanciesContext = () => useContext(VacanciesContext);

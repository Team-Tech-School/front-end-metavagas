import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../api/api";

// Tipagem para as vagas
interface Vacancy {
   id: number;
   title: string;
   // Outros campos relevantes podem ser adicionados aqui
}

interface VacanciesProps {
   children: ReactNode;
}

interface VacanciesContextData {
   vacancies: Vacancy[];
   mostRecentVacancies: Vacancy[];
   fetchMostRecentVacancies: () => Promise<void>;
   fetchVacanciesForSelectedCategory: (search: string) => Promise<void>;
}

const VacanciesContext = createContext<VacanciesContextData>({} as VacanciesContextData);

export const VacanciesProvider = ({ children }: VacanciesProps) => {
   const [vacancies, setVacancies] = useState<Vacancy[]>([]);
   const [mostRecentVacancies, setMostRecentVacancies] = useState<Vacancy[]>([]);

   const fetchMostRecentVacancies = async () => {
      try {
         const response = await api.get(`/vacancy?limit=4`);
         console.log(response.data.vacancies);
         setMostRecentVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchVacancies: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   const fetchVacanciesForSelectedCategory = async (categoryType: string) => {
      try {
         const response = await api.get(`/vacancy?limit=12&${categoryType}=`);
         setVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchVacancies: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   return <VacanciesContext.Provider value={{ vacancies, mostRecentVacancies, fetchMostRecentVacancies, fetchVacanciesForSelectedCategory }}>{children}</VacanciesContext.Provider>;
};

export const useVacanciesContext = () => useContext(VacanciesContext);

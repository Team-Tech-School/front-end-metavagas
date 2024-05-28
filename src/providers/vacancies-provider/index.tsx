import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../api/api";
import { useAuthContext } from "../auth-provider";

interface Vacancy {
   id: number;
   title: string;
}

interface VacanciesProps {
   children: ReactNode;
}

interface VacanciesContextData {
   vacancies: Vacancy[];
   mostRecentVacancies: Vacancy[];
   fetchMostRecentVacancies: () => Promise<void>;
   fetchVacanciesForSelectedCategory: (search: string) => Promise<void>;
   fetchVacanciesByFilters: (filters: { tecName?: string; location?: string; vacancyType?: string; level?: string }) => Promise<void>;
   fetchAllVacancies: () => Promise<void>;
}

const VacanciesContext = createContext<VacanciesContextData>({} as VacanciesContextData);

export const VacanciesProvider = ({ children }: VacanciesProps) => {
   const [vacancies, setVacancies] = useState<Vacancy[]>([]);
   const [mostRecentVacancies, setMostRecentVacancies] = useState<Vacancy[]>([]);
   const { isLoggedIn } = useAuthContext();

   const fetchMostRecentVacancies = async () => {
      try {
         const response = await api.get(`/vacancy/public?limit=4`);
         setMostRecentVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchMostRecentVacancies: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   const fetchVacanciesForSelectedCategory = async (categoryType: string) => {
      try {
         const response = await api.get(`/vacancy/public?limit=12&${categoryType}=`);
         setVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchVacanciesForSelectedCategory: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   const fetchVacanciesByFilters = async (filters?: { tecName?: string; location?: string; vacancyType?: string; level?: string }) => {
      try {
         const endpoint = isLoggedIn ? `/vacancy/private` : `/vacancy/public`;
         const headers = isLoggedIn ? { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } : {};

         const response = await api.get(endpoint, { headers: headers, params: { ...filters, limit: 10 } });
         setVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchVacanciesByFilters: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   const fetchAllVacancies = async () => {
      try {
         const endpoint = isLoggedIn ? `/vacancy/private` : `/vacancy/public`;
         const headers = isLoggedIn ? { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } : {};

         const response = await api.get(endpoint, { headers: headers, params: { limit: 10 } });
         setVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchVacanciesByFilters: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   return (
      <VacanciesContext.Provider value={{ vacancies, mostRecentVacancies, fetchMostRecentVacancies, fetchAllVacancies, fetchVacanciesForSelectedCategory, fetchVacanciesByFilters }}>
         {children}
      </VacanciesContext.Provider>
   );
};

export const useVacanciesContext = () => useContext(VacanciesContext);

import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { api } from "../../api/api";
import { useAuthContext } from "../auth-provider";
import { SalaryRangeCheckbox } from "../../components";
import { Vacancy } from "../../@types";

interface VacanciesProps {
   children: ReactNode;
}

interface VacanciesContextData {
   vacancies: Vacancy[];
   mostRecentVacancies: Vacancy[];
   fetchMostRecentVacancies: () => Promise<void>;
   fetchVacanciesForSelectedCategory: (search: string) => Promise<void>;
   fetchVacanciesByFilters: (filters: { tecName?: string; location?: string; vacancyType?: string; level?: string; wageMin?: number }) => Promise<void>;
   fetchAllVacancies: () => Promise<void>;
}

const VacanciesContext = createContext<VacanciesContextData>({} as VacanciesContextData);

export const VacanciesProvider = ({ children }: VacanciesProps) => {
   const [vacancies, setVacancies] = useState<Vacancy[]>([]);
   const [salaryRange, setSalaryRange] = useState<{ min: number; max: number }>({ min: 0, max: 10000 });
   const [mostRecentVacancies, setMostRecentVacancies] = useState<Vacancy[]>([]);
   const { isLoggedIn } = useAuthContext();

   const fetchMostRecentVacancies = async () => {
      try {
         const response = await api.get(`/vacancy/public?limit=4`);

         setMostRecentVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchMostRecentVacancies: ", error);
         setMostRecentVacancies([]);
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

   const fetchVacanciesByFilters = async (filters: { tecName?: string; location?: string; vacancyType?: string; level?: string; wageMin?: number }) => {
      try {
         const endpoint = isLoggedIn ? `/vacancy/private` : `/vacancy/public`;

         const headers = isLoggedIn ? { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } : {};

         const response = await api.get(endpoint, {
            headers: headers,
            params: { ...filters, wageMin: salaryRange.min, wageMax: salaryRange.max },
         });

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

         const response = await api.get(endpoint, { headers: headers });

         setVacancies(response.data.vacancies);
      } catch (error: any) {
         console.error("Something went wrong at fetchVacanciesByFilters: ", error);
         setVacancies([]);
         throw new Error(error);
      }
   };

   const handleSalaryRangeChange = useCallback((range: { min: number; max: number }) => {
      setSalaryRange(range);
   }, []);

   return (
      <VacanciesContext.Provider
         value={{
            vacancies,
            mostRecentVacancies,
            fetchMostRecentVacancies,
            fetchAllVacancies,
            fetchVacanciesForSelectedCategory,
            fetchVacanciesByFilters,
         }}
      >
         <SalaryRangeCheckbox min={0} max={10000} onChange={handleSalaryRangeChange} />
         {children}
      </VacanciesContext.Provider>
   );
};

export const useVacanciesContext = () => useContext(VacanciesContext);

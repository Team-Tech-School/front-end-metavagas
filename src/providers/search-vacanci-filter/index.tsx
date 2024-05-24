//import biblioteca Axios
import axios from "axios";
//import react
import { createContext, useContext, useState } from "react";
//import types
import { Vacancy, VacancyContextProps, VacancyFilters, VacancyProviderProps } from "../../@types";

//url base (link de requisição a API)
const BASE_URL = "https://back-end-metavagas-production.up.railway.app";

const VacancyFilterContext = createContext<VacancyContextProps | undefined>(undefined);  

export const useVacancyFilterContext = (): VacancyContextProps  => {
    const context = useContext(VacancyFilterContext);
    if (!context) {
        throw new Error("useVacancyFilterContext must be used within a VacancyFilterProvider");
    }
    return context;
}

export const SearchVacanciesFilterProvider = ({children}: VacancyProviderProps) => {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchVacancies = async (filters: VacancyFilters) => {
        setLoading(true);
        setError(null);
        try {
            console.log("Fetching vacancies with filters:", filters);
            const response = await axios.get<Vacancy[]>(`${BASE_URL}/vacancy`, {
                params: {
                    tecName: filters.tecName,
                    vvacancyType: filters.vacancyType,
                    level: filters.level,
                    //minSalary: filters.minSalary,
                    //maxSalary: filters.maxSalary,
                    //location: filters.location,
                }
            })            
            setVacancies(response.data);             
        } catch (error: any) {
            setError(error.message);
           console.error('Erro ao buscar vagas:', error);            
        } finally {
            setLoading(false);
          }
    }

    return (
        <VacancyFilterContext.Provider value={{vacancies, fetchVacancies, loading, error}}>
            {children}
        </VacancyFilterContext.Provider>
    );
}
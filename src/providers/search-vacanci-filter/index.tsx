//import react
import { createContext, useCallback, useContext, useState } from "react";
//import types
import { Vacancy, VacancyContextProps, VacancyFilters, VacancyProviderProps } from "../../@types";
import { api } from "../../api/api";
//import components
import { SalaryRangeCheckbox } from "../../components";


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
    const [salaryRange, setSalaryRange] = useState<{ min: number; max: number }>({ min: 0, max: 10000 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchVacancies = async (filters: VacancyFilters) => {
        setLoading(true);
        setError(null);
        try {
            console.log("Fetching vacancies with filters:", filters);

            const response = await api.get<Vacancy[]>(`/vacancy/public`, {

                params: {
                    tecName: filters.tecName,
                    vacancyType: filters.vacancyType,
                    level: filters.level,
                    wageMin: salaryRange.min,
                    wageMax: salaryRange.max,
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
    const handleSalaryRangeChange = useCallback((range: { min: number; max: number }) => {
        setSalaryRange(range);
    }, []);

    return (
        <VacancyFilterContext.Provider value={{vacancies, fetchVacancies, loading, error}}>
            <SalaryRangeCheckbox min={0} max={10000} onChange={handleSalaryRangeChange} />
            {children}
        </VacancyFilterContext.Provider>
    );
}
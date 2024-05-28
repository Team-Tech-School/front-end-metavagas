//import axios
import axios from "axios";

const BASE_URL = "https://back-end-metavagas-production.up.railway.app"

export const searchFiltersVacancy = async (queryFilters: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/vacancies/vacancies`, {
            params: {
                tecName: queryFilters.technologies,
                vacancyRole: queryFilters.role,
                minSalary: queryFilters.minSalary,
                maxSalary: queryFilters.maxSalary,
                vacancyType: queryFilters.type,
                location: queryFilters.location
                regimeTrabalho: queryFilters.
            }
        });

        return response.data;
    } catch (error: any) {
        console.error('Erro ao buscar vagas:', error);
        throw error;
    }
}
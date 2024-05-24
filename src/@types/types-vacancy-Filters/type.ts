import { ReactNode } from "react";

export interface Vacancy {
    vacancyRole: string;
    wage: number;
    location: string;
    vacancyType: string;
    vacancyDescription: string;
    level: string;
    companyId: {
      name: string;
      city: string;
      state: string;
      address: string;
      foundedAt: string;
      description: string;
      id: number;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    advertiserId: {
      name: string;
      email: string;
      password: string;
      role: string;
      id: number;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    technologyId: {
      id: number;
      tecName: string;
      creatorsName: string;
      createAt: string;
      updateAt: string;
      deleteAt: string | null;
    };
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  
}
export interface VacancyContextProps {
    vacancies: Vacancy[];
    fetchVacancies: (filters: VacancyFilters) => Promise<void>;
    loading: boolean;
    error: string | null;
  }
  export interface VacancyProviderProps {
    children: ReactNode;
  }

  export interface VacancyFilters {
    tecName?: string;
    vacancyType?: string;
    level?: string;
    minSalary?: number;
    maxSalary?: number;
    location?: string;
  }
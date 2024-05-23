import { ReactNode } from "react";
import { AuthProvider } from "../auth-provider";
import { UserProvider } from "../user-provider";
import { VacanciesProvider } from "../vacancies-provider";
import { SearchVacanciesFilterProvider } from "../search-vacanci-filter";

interface AppProviderProps {
   children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
   return (
      <UserProvider>
         <AuthProvider>
            <SearchVacanciesFilterProvider>
            <VacanciesProvider>{children}</VacanciesProvider>
            </SearchVacanciesFilterProvider>
         </AuthProvider>
      </UserProvider>
   );
};

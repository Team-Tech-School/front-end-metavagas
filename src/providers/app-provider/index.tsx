import { ReactNode } from "react";
import { AuthProvider } from "../auth-provider";
import { UserProvider } from "../user-provider";
import { VacanciesProvider } from "../vacancies-provider";

interface AppProviderProps {
   children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
   return (
      <UserProvider>
         <AuthProvider>
            <VacanciesProvider>{children}</VacanciesProvider>
         </AuthProvider>
      </UserProvider>
   );
};

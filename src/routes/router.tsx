import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import MainPage from "../pages/main-page";
import SearchVacancyPage from "../pages/search-vacancy-page";
import SignInPage from "../pages/sign-in-page";
import SignUpPage from "../pages/sign-up-page";
import ShowVacanciesPage from "../pages/show-vacancies-page";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<BaseLayout />}>
               <Route index element={<MainPage />} />
               <Route path="buscar-vagas" element={<SearchVacancyPage />} />
               <Route path="login" element={<SignInPage />} />
               <Route path="cadastro" element={<SignUpPage />} />
               <Route path="mostrar-vagas" element={<ShowVacanciesPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

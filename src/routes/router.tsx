import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import HomePage from "../pages/home-page";
import SearchVacancyPage from "../pages/search-vacancy-page";
import SignUpPage from "../pages/sign-up-page";
import ShowVacanciesPage from "../pages/show-vacancies-page";
import SignInPage from "../pages/sign-in-page";
import BaseLayoutSignInSignUp from "../components/base-layout-signIn-and-signUp";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<BaseLayout />}>
               <Route index path="/" element={<HomePage />} />
               <Route path="buscar-vagas" element={<SearchVacancyPage />} />
               <Route element={<BaseLayoutSignInSignUp />}>
                  <Route path="fazer-login" element={<SignInPage />} />
                  <Route path="fazer-cadastro" element={<SignUpPage />} />
               </Route>
               <Route path="mostrar-vagas" element={<ShowVacanciesPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

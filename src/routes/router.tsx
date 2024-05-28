import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignUpPage, ShowVacanciesPage, SignInPage } from "../pages/index";
import { BaseLayoutSignInSignUp, BaseLayout } from "../components/index";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<BaseLayout />}>
               <Route index element={<HomePage />} />
               <Route element={<BaseLayoutSignInSignUp />}>
                  <Route path="fazer-login" element={<SignInPage />} />
                  <Route path="fazer-cadastro" element={<SignUpPage />} />
               </Route>
               <Route path="buscar-vagas" element={<ShowVacanciesPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

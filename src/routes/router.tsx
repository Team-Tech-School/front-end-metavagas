import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<BaseLayout />}>
               {/* <Route index element={<SearchVacancyPage />} />
               <Route element={<SignInPage />} />
               <Route element={<SignUpPage />} />
               <Route element={<MainPage />} /> */}
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

import { Outlet } from "react-router-dom";
import * as S from "./style";
import { Header, Footer } from "../index";

export const BaseLayout = () => {
   return (
      <>
         <S.HeaderWrapper>
            <Header />
         </S.HeaderWrapper>
         <S.MainContent>
            <Outlet />
         </S.MainContent>
         <Footer />
      </>
   );
};

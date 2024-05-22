// import special component
import { Outlet } from "react-router-dom";
//import style
import * as S from "./style";
//import components
import { Header, Footer } from "../index";

export const BaseLayout = () => {
   return (
      <>
         <S.HeaderWrapper>
            <Header isLoggedIn={true} />
         </S.HeaderWrapper>
         <S.MainContent>
            <Outlet />
         </S.MainContent>
         <Footer showButton={true} />
      </>
   );
};

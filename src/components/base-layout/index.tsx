import { Outlet } from "react-router-dom";
import * as S from "./style";
import Header from "./header";
import Footer from "./footer";

const BaseLayout = () => {
   return (
      <>
         <S.HeaderWrapper>
            <Header />
         </S.HeaderWrapper>
         <S.MainContent>
            <Outlet />
         </S.MainContent>
         <Footer showButton={true} />
      </>
   );
};

export default BaseLayout;

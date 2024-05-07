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
         <div style={{ height: "2000px" }}>
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default BaseLayout;

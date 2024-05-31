import Logo from "../../../assets/images/metavagas.png";
import { useAuthContext } from "../../../providers";
import { OrangeButton, SmallButton, UserProfile } from "../../index";
import * as S from "./style";

export const Header = () => {
   const { user, isLoggedIn } = useAuthContext();

   return (
      <>
         <S.PurpleBackground>
            <S.ContentWrapper>
               <S.StyledLink to="/">
                  <S.Logo src={Logo} />
               </S.StyledLink>
               {isLoggedIn ? (
                  <UserProfile username={user?.name} email={user?.email} />
               ) : (
                  <S.ButtonsWrapper>
                     <SmallButton title="Entrar" link="/fazer-login" />
                     <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" width="medium" />
                  </S.ButtonsWrapper>
               )}
            </S.ContentWrapper>
            <S.BlackLine />
         </S.PurpleBackground>
      </>
   );
};

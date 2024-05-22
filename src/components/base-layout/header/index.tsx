//import assets
import Logo from "../../../assets/images/metavagas.png";
//import components
import { OrangeButton, SmallButton, UserProfile } from "../../index";
//import style
import * as S from "./style";

// tipagem
interface HeaderProps {
   isLoggedIn: boolean;
}

export const Header = ({ isLoggedIn }: HeaderProps) => {
   return (
      <>
         <S.PurpleBackground>
            <S.ContentWrapper>
               <S.StyledLink to="/">
                  <S.Logo src={Logo} />
               </S.StyledLink>
               {isLoggedIn ? (
                  <UserProfile username="Isa Moura" email="mourabisabelle@gmail.com" />
               ) : (
                  <S.ButtonsWrapper>
                     <SmallButton title="Entrar" link="/fazer-login" />
                     <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" width="large" />
                  </S.ButtonsWrapper>
               )}
            </S.ContentWrapper>
            <S.BlackLine />
         </S.PurpleBackground>
      </>
   );
};

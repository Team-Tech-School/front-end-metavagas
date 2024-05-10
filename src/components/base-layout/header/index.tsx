import Logo from "../../../assets/images/metavagas.png";
import { OrangeButton, SmallButton } from "../../buttons/index";
import { UserProfile } from "../index1";
import * as S from "./style";

interface HeaderProps {
   isLoggedIn: boolean;
}

export const Header = ({ isLoggedIn }: HeaderProps) => {
   return (
      <>
         <S.PurpleBackground>
            <S.ContentWrapper>
               <S.Logo src={Logo} />
               {isLoggedIn ? (
                  <UserProfile username="Isa Moura" />
               ) : (
                  <S.ButtonsWrapper>
                     <SmallButton title="Entrar" link="/fazer-login" />
                     <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" width="large" />
                  </S.ButtonsWrapper>
               )}
            </S.ContentWrapper>
         </S.PurpleBackground>
      </>
   );
};

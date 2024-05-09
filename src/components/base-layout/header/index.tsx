import Logo from "../../../assets/images/metavagas.png";
import { OrangeButton, SmallButton } from "../../buttons/index";
import * as S from "./style";

export const Header = () => {
   return (
      <>
         <S.PurpleBackground>
            <S.ContentWrapper>
               <S.Logo src={Logo} />
               <S.ButtonsWrapper>
                  <SmallButton title="Entrar" link="/fazer-login" />
                  <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" width="large" />
               </S.ButtonsWrapper>
            </S.ContentWrapper>
         </S.PurpleBackground>
      </>
   );
};

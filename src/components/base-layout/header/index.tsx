import Logo from "../../../assets/images/metavagas.png";
import OrangeButton from "../../buttons/orange-button";
import SmallButton from "../../buttons/small-button";
import * as S from "./style";

const Header = () => {
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

export default Header;

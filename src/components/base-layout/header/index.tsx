import Logo from "../../../assets/images/metavagas.png";
import LargeButton from "../../buttons/large-button";
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
                  <LargeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" />
               </S.ButtonsWrapper>
            </S.ContentWrapper>
         </S.PurpleBackground>
      </>
   );
};

export default Header;
